package BuildSoft.persistencia.dominio.HojaEdadOscura;

import java.io.Serializable;

public class TecnicasVO implements Serializable {

    private static final long serialVersionUID = 1L;

    private String armas;
    private String comercio;
    private String equitacion;
    private String etiqueta;
    private String interpretacion;
    private String pericias;
    private String sigilo;
    private String supervivencia;
    private String tiroArco;
    private String tratoAnimales;

    public String getArmas() {
        return armas;
    }

    public void setArmas(String armas) {
        this.armas = armas;
    }

    public String getComercio() {
        return comercio;
    }

    public void setComercio(String comercio) {
        this.comercio = comercio;
    }

    public String getEquitacion() {
        return equitacion;
    }

    public void setEquitacion(String equitacion) {
        this.equitacion = equitacion;
    }

    public String getEtiqueta() {
        return etiqueta;
    }

    public void setEtiqueta(String etiqueta) {
        this.etiqueta = etiqueta;
    }

    public String getInterpretacion() {
        return interpretacion;
    }

    public void setInterpretacion(String interpretacion) {
        this.interpretacion = interpretacion;
    }

    public String getPericias() {
        return pericias;
    }

    public void setPericias(String pericias) {
        this.pericias = pericias;
    }

    public String getSigilo() {
        return sigilo;
    }

    public void setSigilo(String sigilo) {
        this.sigilo = sigilo;
    }

    public String getSupervivencia() {
        return supervivencia;
    }

    public void setSupervivencia(String supervivencia) {
        this.supervivencia = supervivencia;
    }

    public String getTiroArco() {
        return tiroArco;
    }

    public void setTiroArco(String tiroArco) {
        this.tiroArco = tiroArco;
    }

    public String getTratoAnimales() {
        return tratoAnimales;
    }

    public void setTratoAnimales(String tratoAnimales) {
        this.tratoAnimales = tratoAnimales;
    }
}
