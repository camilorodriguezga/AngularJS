package BuildSoft.persistencia.interfaz;

import BuildSoft.persistencia.dominio.UsuarioVO;


public interface UsuarioInterface {

    /**
     * @param usuario a crear
     * @return true si se inserto
     */
    public boolean crearUsuario(UsuarioVO usuario);

    /**
     * @param usuario
     * @return
     */
    public String consultarUsuario(String correo, String... strings);

}
