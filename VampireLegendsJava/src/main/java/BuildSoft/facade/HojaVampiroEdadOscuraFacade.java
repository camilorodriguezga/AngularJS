package BuildSoft.facade;

import java.util.HashMap;

import com.google.gson.Gson;
import com.google.gson.JsonIOException;

import BuildSoft.VampireLegendsService.HojaVampiroBO;
import BuildSoft.persistencia.dominio.HojaEdadOscura.HojaVampiroEdadOscuraVO;

public class HojaVampiroEdadOscuraFacade {
	
	private static HojaVampiroEdadOscuraFacade INSTANCE = new HojaVampiroEdadOscuraFacade();
	private Gson gson = new Gson();
	
	private HojaVampiroEdadOscuraFacade() { 
	}

	public static HojaVampiroEdadOscuraFacade getInstance() {
		return INSTANCE;
	}

	public String consultarHojaVampiroEdadOscura(String correo, String nombre) {
		String hojaVampiroConsultada = null;
		
		try {
			HojaVampiroBO hojaVampiro = new HojaVampiroBO();
			hojaVampiroConsultada = hojaVampiro.consultarHojaRol(correo, nombre);
		} catch (JsonIOException e) {
			e.printStackTrace();
		}
		return hojaVampiroConsultada;
	}
	
	public String consultarHojasVampiro(String correo, HashMap<String, String> otrosFiltro) {
		String hojasVampiro = null;
		try {
			HojaVampiroBO hojaVampiro = new HojaVampiroBO();
			hojasVampiro = hojaVampiro.consultarHojasRol(correo, otrosFiltro);
		} catch (JsonIOException e) {
			e.printStackTrace();
		}
		return hojasVampiro;
		
	}
	
	public String consultarHojasVampiroInformacionBasica(String correo, HashMap<String, String> otrosFiltro) {
		String hojasVampiro = null;
		try {
			HojaVampiroBO hojaVampiro = new HojaVampiroBO();
			hojasVampiro = hojaVampiro.consultarHojasRolInformacionBasica(correo, otrosFiltro);
		} catch (JsonIOException e) {
			e.printStackTrace();
		}
		return hojasVampiro;
		
	}

	public boolean guardarHojaRolVampiroEdadOscura(String hojaVampiroEdadOscura) {
		boolean hojaVampiro = false;		
		try {
			HojaVampiroBO hojaVampiroBO = new HojaVampiroBO(gson.fromJson(hojaVampiroEdadOscura, HojaVampiroEdadOscuraVO.class));
			hojaVampiro = hojaVampiroBO.guardarHojaRol();
		} catch (JsonIOException e) {
			e.printStackTrace();
		}
		return hojaVampiro;
	}

}
