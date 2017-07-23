package BuildSoft.persistencia.dominio.HojaEdadOscura;

import java.io.Serializable;

public class ConocimientosVO implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	private String academicismo;
	private String investigacion;
	private String leyes;
	private String linguistica;
	private String medicina;
	private String ocultismo;
	private String politica;
	private String sabiduriaPopular;
	private String senescal;
	private String teologia;
	
	public String getAcademicismo() {
		return academicismo;
	}
	public void setAcademicismo(String academicismo) {
		this.academicismo = academicismo;
	}
	public String getInvestigacion() {
		return investigacion;
	}
	public void setInvestigacion(String investigacion) {
		this.investigacion = investigacion;
	}
	public String getLeyes() {
		return leyes;
	}
	public void setLeyes(String leyes) {
		this.leyes = leyes;
	}
	public String getLinguistica() {
		return linguistica;
	}
	public void setLinguistica(String linguistica) {
		this.linguistica = linguistica;
	}
	public String getMedicina() {
		return medicina;
	}
	public void setMedicina(String medicina) {
		this.medicina = medicina;
	}
	public String getOcultismo() {
		return ocultismo;
	}
	public void setOcultismo(String ocultismo) {
		this.ocultismo = ocultismo;
	}
	public String getPolitica() {
		return politica;
	}
	public void setPolitica(String politica) {
		this.politica = politica;
	}
	public String getSabiduriaPopular() {
		return sabiduriaPopular;
	}
	public void setSabiduriaPopular(String sabiduriaPopular) {
		this.sabiduriaPopular = sabiduriaPopular;
	}
	public String getSenescal() {
		return senescal;
	}
	public void setSenescal(String senescal) {
		this.senescal = senescal;
	}
	public String getTeologia() {
		return teologia;
	}
	public void setTeologia(String teologia) {
		this.teologia = teologia;
	}
}
