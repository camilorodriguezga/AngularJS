package BuildSoft.persistencia.dominio.HojaEdadOscura;

import java.io.Serializable;

public class Disciplina implements Serializable {

    private static final long serialVersionUID = 1L;

    private String disciplina;
    private String puntos;
    private String tipo;
    private String categoria;

    public String getDisciplina() {
        return disciplina;
    }

    public void setDisciplina(String disciplina) {
        this.disciplina = disciplina;
    }

    public String getPuntos() {
        return puntos;
    }

    public void setPuntos(String puntos) {
        this.puntos = puntos;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public String getCategoria() {
        return categoria;
    }

    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }
}
