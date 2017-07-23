package BuildSoft.rest;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import BuildSoft.facade.UsuarioFacade;

@Path("usuario")
public class UsuarioRest {
	
	@Path("crearUsuario")
	@PUT
	@Consumes({MediaType.APPLICATION_JSON})
	public Response crearUsuario(String usuario){
		boolean usuarioCreado = false;
		try {
			usuarioCreado = UsuarioFacade.obtenerInstancia().crearUsuario(usuario);
		}catch(Exception e){
			e.printStackTrace();
		}
		return Response.ok(usuarioCreado, MediaType.APPLICATION_JSON).build();
	}
	
	@Path("consultarUsuario")
	@POST
	@Consumes({MediaType.APPLICATION_JSON})
	public Response consultarUsuario(String usuario){
		String usuarioConsultado = null;
		try {
			usuarioConsultado = UsuarioFacade.obtenerInstancia().consultarUsuario(usuario);
		}catch(Exception e){
			e.printStackTrace();
		}
		return Response.ok(usuarioConsultado, MediaType.APPLICATION_JSON).build();
	}
}