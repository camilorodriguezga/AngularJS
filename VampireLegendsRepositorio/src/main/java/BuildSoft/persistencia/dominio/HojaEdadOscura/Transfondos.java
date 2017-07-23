package BuildSoft.persistencia.dominio.HojaEdadOscura;

import java.io.Serializable;

public class Transfondos implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	private String nombre;
	private String descripcion;
	private String puntos;
	private String tipo;
	
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
	public String getTipo() {
		return tipo;
	}
	public void setTipo(String tipo) {
		this.tipo = tipo;
	}
}
