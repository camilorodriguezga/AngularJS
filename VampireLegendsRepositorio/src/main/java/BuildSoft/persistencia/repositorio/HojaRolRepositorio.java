package BuildSoft.persistencia.repositorio;

import BuildSoft.persistencia.conexion.ConexionMongo;
import BuildSoft.persistencia.dominio.HojaEdadOscura.HojaVampiroEdadOscuraVO;
import BuildSoft.persistencia.interfaz.HojaRolInterface;
import com.google.gson.Gson;
import com.mongodb.BasicDBObject;
import com.mongodb.MongoException;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.model.Projections;
import com.mongodb.client.model.UpdateOptions;
import com.mongodb.util.JSON;
import org.bson.Document;
import org.bson.conversions.Bson;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;

import static com.mongodb.client.model.Filters.and;
import static com.mongodb.client.model.Filters.eq;

public class HojaRolRepositorio implements HojaRolInterface {

    @Override
    public String consultarHojaRol(String correo, String nombre) {
        Document find = null;
        Bson filtros = null;
        try {
            MongoDatabase db = ConexionMongo.getConexion().database;
            MongoCollection<Document> dbCollectionUsuario = db.getCollection("HojaRolEdadOscura");
            filtros = and(eq("correo", correo), eq("nombre", nombre));
            find = dbCollectionUsuario.find(filtros).first();

        } catch (MongoException e) {
            e.printStackTrace();
        }

        return (find != null) ? find.toJson() : "";
    }

    @Override
    public String consultarHojasRol(String correo, HashMap<String, String> otrosFiltros) {

        Gson gson = null;
        List<Document> respuesta = null;

        try {
            MongoDatabase db = ConexionMongo.getConexion().database;
            MongoCollection<Document> dbCollectionUsuario = db.getCollection("HojaRolEdadOscura");
            gson = new Gson();

            Document data = new Document("correo", correo);

            if (otrosFiltros != null && otrosFiltros.size() > 0) {
                Iterator<String> itr = otrosFiltros.keySet().iterator();

                while (itr.hasNext()) {
                    String key = itr.next();
                    data.append(key, otrosFiltros.get(key));
                }
            }

            respuesta = dbCollectionUsuario.find(data).into(new ArrayList<Document>());

        } catch (MongoException e) {
            e.printStackTrace();
        }

        return gson.toJson(respuesta);
    }

    @Override
    public String consultarHojasRolInformacionBasica(String correo, HashMap<String, String> otrosFiltros) {
        Gson gson = null;
        List<Document> respuesta = null;

        try {
            MongoDatabase db = ConexionMongo.getConexion().database;
            MongoCollection<Document> dbCollectionUsuario = db.getCollection("HojaRolEdadOscura");
            gson = new Gson();

            Document data = new Document("correo", correo);

            if (otrosFiltros != null && otrosFiltros.size() > 0) {
                Iterator<String> itr = otrosFiltros.keySet().iterator();

                while (itr.hasNext()) {
                    String key = itr.next();
                    data.append(key, otrosFiltros.get(key));
                }
            }

            respuesta = dbCollectionUsuario.find(data).projection(Projections.include("nombre", "cronica", "generacion", "edad", "clan")).into(new ArrayList<Document>());

        } catch (MongoException e) {
            e.printStackTrace();
        }

        return gson.toJson(respuesta);
    }

    @Override
    public boolean guardarHojaRol(HojaVampiroEdadOscuraVO hojaVampiroEdadOscura) {
        Gson gson = null;
        Bson filtros = null;
        boolean respuesta = false;


        try {
            MongoDatabase db = ConexionMongo.getConexion().database;
            MongoCollection<Document> dbCollectionUsuario = db.getCollection("HojaRolEdadOscura");
            gson = new Gson();

            Document newDocument = new Document();
            BasicDBObject objeto = (BasicDBObject) JSON.parse(gson.toJson(hojaVampiroEdadOscura));
            newDocument.append("$set", objeto);

            filtros = and(eq("correo", hojaVampiroEdadOscura.getCorreo()), eq("nombre", hojaVampiroEdadOscura.getNombre()));
            respuesta = dbCollectionUsuario.updateOne(filtros, newDocument, new UpdateOptions().upsert(true)).wasAcknowledged();

        } catch (MongoException e) {
            e.printStackTrace();
        }

        return respuesta;
    }

//	public static void main(String[] args) {
//		HojaRolRepositorio v = new HojaRolRepositorio();
//		HashMap<String, String> otrosFiltros = new HashMap<String, String>();
//		String result = v.consultarHojasRolInformacionBasica("cam_rod@hotmail.com", otrosFiltros );
//		System.out.println(result);
//		
//	}
}