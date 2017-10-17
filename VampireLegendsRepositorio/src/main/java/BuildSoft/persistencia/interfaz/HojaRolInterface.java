package BuildSoft.persistencia.interfaz;

import BuildSoft.persistencia.dominio.HojaEdadOscura.HojaVampiroEdadOscuraVO;

import java.util.HashMap;

public interface HojaRolInterface {

    /**
     * @param correo del usuario
     * @param nombre del personaje de rol
     * @return la hoja de vampiro edad oscura
     */
    public String consultarHojaRol(String correo, String nombre);

    /**
     * @param correo del usuario
     * @param nombre del personaje de rol
     * @return la hoja de vampiro edad oscura
     */
    public String consultarHojasRol(String correo, HashMap<String, String> otrosFiltros);

    /**
     * @param correo
     * @param otrosFiltros
     * @return la informacion basica de todas las hojas de rol creadas
     */
    public String consultarHojasRolInformacionBasica(String correo, HashMap<String, String> otrosFiltros);

    /**
     * @param hojaVampiroEdadOscura
     * @return true si se guardo correctamente de lo contrario false
     */
    public boolean guardarHojaRol(HojaVampiroEdadOscuraVO hojaVampiroEdadOscura);

}
