package BuildSoft.persistencia.dominio.HojaEdadOscura;

import java.io.Serializable;

public class AtributosVO implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	private FisicosVO fisicos;
	private SocialesVO sociales;
	private MentalesVO mentales;
	
	public FisicosVO getFisicos() {
		return fisicos;
	}
	public void setFisicos(FisicosVO fisicos) {
		this.fisicos = fisicos;
	}
	public SocialesVO getSociales() {
		return sociales;
	}
	public void setSociales(SocialesVO sociales) {
		this.sociales = sociales;
	}
	public MentalesVO getMentales() {
		return mentales;
	}
	public void setMentales(MentalesVO mentales) {
		this.mentales = mentales;
	}
}
