package BuildSoft.persistencia.dominio.HojaEdadOscura;

import java.io.Serializable;

public class FisicosVO implements Serializable {

    private static final long serialVersionUID = 1L;

    private String fuerza;
    private String destreza;
    private String resistencia;

    public String getFuerza() {
        return fuerza;
    }

    public void setFuerza(String fuerza) {
        this.fuerza = fuerza;
    }

    public String getDestreza() {
        return destreza;
    }

    public void setDestreza(String destreza) {
        this.destreza = destreza;
    }

    public String getResistencia() {
        return resistencia;
    }

    public void setResistencia(String resistencia) {
        this.resistencia = resistencia;
    }

}
