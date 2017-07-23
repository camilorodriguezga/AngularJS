package BuildSoft.facade;

import com.google.gson.Gson;
import com.google.gson.JsonIOException;

import BuildSoft.VampireLegendsService.UsuarioBO;
import BuildSoft.persistencia.dominio.UsuarioVO;

public class UsuarioFacade {
	
	private static UsuarioFacade usuarioFacade = new UsuarioFacade();
	private Gson gson = new Gson();
	private UsuarioFacade() {
		
	}
	
	public static UsuarioFacade obtenerInstancia(){
		return usuarioFacade;
	}
	
	public boolean crearUsuario(String usuario){
		boolean usuarioCreado = false;		
		try {
			UsuarioBO usuarioEnviado = new UsuarioBO(gson.fromJson(usuario, UsuarioVO.class));
			usuarioCreado = usuarioEnviado.creaUsuario();
		} catch (JsonIOException e) {
			e.printStackTrace();
		}
		return usuarioCreado;
	}
	
	public String consultarUsuario(String usuario){
		String usuarioConsultado = null;
		
		try {
			UsuarioBO usuarioEnviado = new UsuarioBO(gson.fromJson(usuario, UsuarioVO.class));
			usuarioConsultado = usuarioEnviado.loginUsuario();
		} catch (JsonIOException e) {
			e.printStackTrace();
		}
		return usuarioConsultado;
	}
}