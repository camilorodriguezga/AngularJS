package BuildSoft.persistencia.dominio.HojaEdadOscura;

import java.io.Serializable;

public class ExperienciaVO implements Serializable {

    private static final long serialVersionUID = 1L;

    private int experiencia;

    public int getExperiencia() {
        return experiencia;
    }

    public void setExperiencia(int experiencia) {
        this.experiencia = experiencia;
    }


}
