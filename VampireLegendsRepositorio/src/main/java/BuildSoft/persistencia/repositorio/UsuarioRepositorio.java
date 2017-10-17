package BuildSoft.persistencia.repositorio;

import BuildSoft.persistencia.conexion.ConexionMongo;
import BuildSoft.persistencia.dominio.UsuarioVO;
import BuildSoft.persistencia.interfaz.UsuarioInterface;
import com.google.gson.Gson;
import com.mongodb.MongoException;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.model.UpdateOptions;
import org.bson.Document;
import org.bson.conversions.Bson;

import static com.mongodb.client.model.Filters.and;
import static com.mongodb.client.model.Filters.eq;

public class UsuarioRepositorio implements UsuarioInterface {

    Gson json = null;

    public UsuarioRepositorio() {
        json = new Gson();
    }

    @Override
    public boolean crearUsuario(UsuarioVO usuario) {
        boolean crearUsuario = false;
        try {
            MongoDatabase db = ConexionMongo.getConexion().database;
            MongoCollection<Document> dbCollectionUsuario = db.getCollection("Usuario");

            Document search = new Document("correo", usuario.getCorreo());
            Document query = new Document();

            query.append("$set",
                    new Document("nick", usuario.getNickname())
                            .append("primerApellido", usuario.getPrimerApellido())
                            .append("correo", usuario.getCorreo())
                            .append("contrasenia", usuario.getContrasenia())
                            .append("segundoNombre", usuario.getSegundoNombre())
                            .append("primerNombre", usuario.getPrimerNombre())
                            .append("segundoApellido", usuario.getSegundoApellido()));

            dbCollectionUsuario.updateOne(search, query, new UpdateOptions().upsert(true));

        } catch (Exception e) {
            e.printStackTrace();
            return false;
        } finally {
            crearUsuario = true;
        }
        return crearUsuario;
    }

    @Override
    public String consultarUsuario(String correo, String... strings) {
        Document find = null;
        Bson filtros = null;
        try {
            MongoDatabase db = ConexionMongo.getConexion().database;
            MongoCollection<Document> dbCollectionUsuario = db.getCollection("Usuario");

            if (strings.length > 0) {
                filtros = and(eq("correo", correo), eq("contrasenia", strings[0]));
            } else {
                filtros = eq("correo", correo);
            }

            find = dbCollectionUsuario.find(filtros).first();

        } catch (MongoException e) {
            e.printStackTrace();
        }

        return (find != null) ? find.toJson() : "";
    }

//	public static void main(String[] args) {
//		UsuarioRepositorio v = new UsuarioRepositorio();
//		UsuarioVO usuario = new UsuarioVO();
//		usuario.setCorreo("carodriguezga@gmail.com");
//		usuario.setPrimerApellido("Rodríguez");
//		
//		System.out.println(v.consultarUsuario("carodriguezga@gmail.com", "camilo1713"));
//	}
}
