package BuildSoft.persistencia.dominio.HojaEdadOscura;

import java.io.Serializable;

public class MentalesVO implements Serializable {

    private static final long serialVersionUID = 1L;

    private String percepcion;
    private String inteligencia;
    private String astucia;

    public String getPercepcion() {
        return percepcion;
    }

    public void setPercepcion(String percepcion) {
        this.percepcion = percepcion;
    }

    public String getInteligencia() {
        return inteligencia;
    }

    public void setInteligencia(String inteligencia) {
        this.inteligencia = inteligencia;
    }

    public String getAstucia() {
        return astucia;
    }

    public void setAstucia(String astucia) {
        this.astucia = astucia;
    }

}
