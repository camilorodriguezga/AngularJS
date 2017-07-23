package BuildSoft.persistencia.conexion;

import java.util.Arrays;

import BuildSoft.persistencia.Propiedades;

import com.mongodb.MongoClient;
import com.mongodb.MongoCredential;
import com.mongodb.ServerAddress;
import com.mongodb.client.MongoDatabase;

public class ConexionMongo {
	
	private MongoClient mongoClient = null;
	public  MongoDatabase database = null;
	private MongoCredential credential = null;
	private Propiedades propiedades = null;
	private static final ConexionMongo MONGOINSTANCE = new ConexionMongo();
	
	private ConexionMongo() {
		propiedades = new Propiedades();
		
		credential = MongoCredential.createCredential(propiedades.getPropValues("user"),
				propiedades.getPropValues("db"),propiedades.getPropValues("password").toCharArray() );
		
		//connect to a replica set, with auto-discovery of the primary, supply a seed list of members
		mongoClient = new MongoClient(Arrays.asList(
				   new ServerAddress(propiedades.getPropValues("ip"), Integer.parseInt(propiedades.getPropValues("port")))
				   //new ServerAddress("localhost", 27018),
				   //new ServerAddress("localhost", 27019)
				   ));
//				   ), Arrays.asList(credential));
		
		//connect to database
		database = mongoClient.getDatabase(propiedades.getPropValues("db"));
	}
	
	public static ConexionMongo getConexion(){
		return MONGOINSTANCE;
	}
	
}
