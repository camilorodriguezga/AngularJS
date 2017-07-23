package BuildSoft.VampireLegendsWeb;

import java.util.HashMap;

import javax.ws.rs.core.Response;

import org.junit.Assert;
import org.junit.Test;

import com.sun.jersey.multipart.FormDataMultiPart;

import BuildSoft.rest.HojaVampiroEdadOscuraRest;

public class HojaRolEdadOscuraTest {
	
	@Test
	public void consultarHojaVampiroEdadOscuraTest(){
		String correo = "cam_rod@hotmail.com";
		String nombre = "C";
		HojaVampiroEdadOscuraRest consultarHoja = new HojaVampiroEdadOscuraRest();
		Response hojaVampiroEdadOscura = consultarHoja.consultarHojaVampiroEdadOscura(correo, nombre);
		Assert.assertTrue(!hojaVampiroEdadOscura.equals(""));
	}
	
	@Test
	public void consultarHojasVampiro(){
		String correo = "cam_rod@hotmail.com";
		String nombre = "C";
		
		HashMap<String, String> otrosFiltros = new HashMap<String, String>();
		otrosFiltros.put("nombre", nombre);
		
		HojaVampiroEdadOscuraRest consultarHoja = new HojaVampiroEdadOscuraRest();
		FormDataMultiPart form = new FormDataMultiPart();
		form.field("correo", correo);
		form.field("otrosFiltros", otrosFiltros.toString());
		Response hojaVampiroEdadOscura = consultarHoja.consultarHojasVampiro(form);
		Assert.assertTrue(!hojaVampiroEdadOscura.equals(""));
	}
	
	@Test
	public void consultarHojasVampiroInformacionBasicaTest(){
		String correo = "cam_rod@hotmail.com";
		String nombre = "C";
		
		HashMap<String, String> otrosFiltros = new HashMap<String, String>();
		otrosFiltros.put("nombre", nombre);
		
		HojaVampiroEdadOscuraRest consultarHoja = new HojaVampiroEdadOscuraRest();
		FormDataMultiPart form = new FormDataMultiPart();
		form.field("correo", correo);
		form.field("otrosFiltros", otrosFiltros.toString());
		Response hojaVampiroEdadOscura = consultarHoja.consultarHojasVampiroInformacionBasica(form);
		Assert.assertTrue(!hojaVampiroEdadOscura.equals(""));
	}

}
