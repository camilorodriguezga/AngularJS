package BuildSoft.persistencia.dominio.HojaEdadOscura;

import java.io.Serializable;

public class GeneracionVO implements Serializable {

    private static final long serialVersionUID = 1L;

    private String generacion;
    private String rangoMaximo;
    private String reservaSangre;
    private String puntosSangreTurno;
    private String reservaSangreGastada;

    public String getGeneracion() {
        return generacion;
    }

    public void setGeneracion(String generacion) {
        this.generacion = generacion;
    }

    public String getRangoMaximo() {
        return rangoMaximo;
    }

    public void setRangoMaximo(String rangoMaximo) {
        this.rangoMaximo = rangoMaximo;
    }

    public String getReservaSangre() {
        return reservaSangre;
    }

    public void setReservaSangre(String reservaSangre) {
        this.reservaSangre = reservaSangre;
    }

    public String getPuntosSangreTurno() {
        return puntosSangreTurno;
    }

    public void setPuntosSangreTurno(String puntosSangreTurno) {
        this.puntosSangreTurno = puntosSangreTurno;
    }

    public String getReservaSangreGastada() {
        return reservaSangreGastada;
    }

    public void setReservaSangreGastada(String reservaSangreGastada) {
        this.reservaSangreGastada = reservaSangreGastada;
    }
}
