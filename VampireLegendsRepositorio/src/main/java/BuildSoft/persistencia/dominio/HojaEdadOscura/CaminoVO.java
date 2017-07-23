package BuildSoft.persistencia.dominio.HojaEdadOscura;

import java.io.Serializable;

public class CaminoVO implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	private String nombre;
	private String descripcion;
	private String puntosCamino;
	private String puntos;
	
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getDescripcion() {
		return descripcion;
	}
	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}
	public String getPuntos() {
		return puntos;
	}
	public void setPuntos(String puntos) {
		this.puntos = puntos;
	}
	public String getPuntosCamino() {
		return puntosCamino;
	}
	public void setPuntosCamino(String puntosCamino) {
		this.puntosCamino = puntosCamino;
	}
	  
}
