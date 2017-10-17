package BuildSoft.persistencia.dominio.Perfil;

import BuildSoft.persistencia.dominio.HojaEdadOscura.ClanVO;
import BuildSoft.persistencia.dominio.HojaEdadOscura.GeneracionVO;

import java.io.Serializable;

public class HojaVampiroInformacionBasicaVO implements Serializable {

    private static final long serialVersionUID = 1L;

    private String nombre;
    private String cronica;
    private ClanVO clan;
    private GeneracionVO generacion;
    private String edad;

    public String getCronica() {
        return cronica;
    }

    public void setCronica(String cronica) {
        this.cronica = cronica;
    }

    public ClanVO getClan() {
        return clan;
    }

    public void setClan(ClanVO clan) {
        this.clan = clan;
    }

    public GeneracionVO getGeneracion() {
        return generacion;
    }

    public void setGeneracion(GeneracionVO generacion) {
        this.generacion = generacion;
    }

    public String getEdad() {
        return edad;
    }

    public void setEdad(String edad) {
        this.edad = edad;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
}
