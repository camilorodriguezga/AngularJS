package BuildSoft.persistencia.dominio;

import java.io.Serializable;

public class HojaVampiroVO implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	private String correo;
	private String fecha;
	private String edad;
	
	public String getCorreo() {
		return correo;
	}
	public void setCorreo(String correo) {
		this.correo = correo;
	}
	public String getFecha() {
		return fecha;
	}
	public void setFecha(String fecha) {
		this.fecha = fecha;
	}
	public String getEdad() {
		return edad;
	}
	public void setEdad(String edad) {
		this.edad = edad;
	}	
}
