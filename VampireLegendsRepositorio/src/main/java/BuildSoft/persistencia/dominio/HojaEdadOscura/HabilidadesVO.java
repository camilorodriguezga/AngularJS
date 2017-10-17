package BuildSoft.persistencia.dominio.HojaEdadOscura;

import java.io.Serializable;

public class HabilidadesVO implements Serializable {

    private static final long serialVersionUID = 1L;

    private TalentosVO talentos;
    private TecnicasVO tecnicas;
    private ConocimientosVO conocimientos;

    public TalentosVO getTalentos() {
        return talentos;
    }

    public void setTalentos(TalentosVO talentos) {
        this.talentos = talentos;
    }

    public TecnicasVO getTecnicas() {
        return tecnicas;
    }

    public void setTecnicas(TecnicasVO tecnicas) {
        this.tecnicas = tecnicas;
    }

    public ConocimientosVO getConocimientos() {
        return conocimientos;
    }

    public void setConocimientos(ConocimientosVO conocimientos) {
        this.conocimientos = conocimientos;
    }


}
