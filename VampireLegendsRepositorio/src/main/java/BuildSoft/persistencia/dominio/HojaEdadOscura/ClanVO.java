package BuildSoft.persistencia.dominio.HojaEdadOscura;

import java.io.Serializable;

public class ClanVO implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	private String clan;
	private Disciplina[] disciplinas;
	private String debilidad;
	private String imagen;
	
	public String getClan() {
		return clan;
	}
	public void setClan(String clan) {
		this.clan = clan;
	}
	public Disciplina[] getDisciplinas() {
		return disciplinas;
	}
	public void setDisciplinas(Disciplina[] disciplinas) {
		this.disciplinas = disciplinas;
	}
	public String getDebilidad() {
		return debilidad;
	}
	public void setDebilidad(String debilidad) {
		this.debilidad = debilidad;
	}
	public String getImagen() {
		return imagen;
	}
	public void setImagen(String imagen) {
		this.imagen = imagen;
	}
}
