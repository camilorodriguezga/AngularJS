package BuildSoft.persistencia.dominio.HojaEdadOscura;

import java.io.Serializable;

public class VirtudesVO implements Serializable {

	private static final long serialVersionUID = 1L;
	
	private String conciencia;
	private String autocontrol;
	private String coraje;
	
	public String getConciencia() {
		return conciencia;
	}
	public void setConciencia(String conciencia) {
		this.conciencia = conciencia;
	}
	public String getAutocontrol() {
		return autocontrol;
	}
	public void setAutocontrol(String autocontrol) {
		this.autocontrol = autocontrol;
	}
	public String getCoraje() {
		return coraje;
	}
	public void setCoraje(String coraje) {
		this.coraje = coraje;
	}
	
	
}
