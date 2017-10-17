package BuildSoft.VampireLegendsService;

import BuildSoft.persistencia.dominio.UsuarioVO;
import BuildSoft.persistencia.interfaz.UsuarioInterface;
import BuildSoft.persistencia.repositorio.UsuarioRepositorio;

import java.io.Serializable;

public class UsuarioBO extends UsuarioVO implements Serializable {

    private static final long serialVersionUID = 1L;
    private static UsuarioInterface usuarioInterface = null;
    private UsuarioVO usuario = null;

    public UsuarioBO(UsuarioVO usuario) {
        this.usuario = usuario;
        usuarioInterface = new UsuarioRepositorio();
    }


    public boolean creaUsuario() {
        boolean usuarioCreado = false;
        if (usuarioInterface.consultarUsuario(usuario.getCorreo()).isEmpty()) {
            usuarioCreado = usuarioInterface.crearUsuario(usuario);
        }
        return usuarioCreado;
    }

    public String loginUsuario() {
        String usuarioConsultado = null;
        try {
            usuarioConsultado = usuarioInterface.consultarUsuario(usuario.getCorreo(), usuario.getContrasenia());
        } catch (Exception e) {
            e.printStackTrace();
        }

        return usuarioConsultado;
    }
}
