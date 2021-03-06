package BuildSoft.VampireLegendsWeb;

import BuildSoft.VampireLegendsService.UsuarioBO;
import BuildSoft.persistencia.dominio.UsuarioVO;
import com.sun.jersey.api.ParamException;
import org.junit.Test;

import static org.junit.Assert.assertTrue;

public class UsuarioTest {

    private UsuarioVO usuario = null;
    private UsuarioBO usuarioBO = null;

    public UsuarioTest() {
        this.CrearUsuarioVO();
        usuarioBO = new UsuarioBO(usuario);
    }

    public void CrearUsuarioVO() throws ParamException {
        usuario = new UsuarioVO();
        usuario.setCorreo("usuarioTest@hotmail.com");
        usuario.setContrasenia("contraseniaTest");
    }

    @Test
    public void loginUsuario() {
        String logueo = usuarioBO.loginUsuario();
        assertTrue(logueo == "");
    }

    @Test
    public void creaUsuario() {
        usuario.setCorreo("cam_rod@hotmail.com");
        boolean crearUsuario = usuarioBO.creaUsuario();
        assertTrue(!crearUsuario);
    }

}
