package BuildSoft.persistencia.dominio.HojaEdadOscura;

import java.io.Serializable;

public class SocialesVO implements Serializable {

    private static final long serialVersionUID = 1L;

    private String carisma;
    private String manipulacion;
    private String apariencia;

    public String getCarisma() {
        return carisma;
    }

    public void setCarisma(String carisma) {
        this.carisma = carisma;
    }

    public String getManipulacion() {
        return manipulacion;
    }

    public void setManipulacion(String manipulacion) {
        this.manipulacion = manipulacion;
    }

    public String getApariencia() {
        return apariencia;
    }

    public void setApariencia(String apariencia) {
        this.apariencia = apariencia;
    }


}
