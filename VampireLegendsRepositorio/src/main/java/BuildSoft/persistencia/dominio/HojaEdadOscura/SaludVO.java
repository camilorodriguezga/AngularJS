package BuildSoft.persistencia.dominio.HojaEdadOscura;

import java.io.Serializable;

public class SaludVO implements Serializable {

    private static final long serialVersionUID = 1L;

    private String nombre;
    private String estado;
    private int penalizacon;

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public int getPenalizacon() {
        return penalizacon;
    }

    public void setPenalizacon(int penalizacon) {
        this.penalizacon = penalizacon;
    }
}
