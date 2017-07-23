package BuildSoft.persistencia.dominio.HojaEdadOscura;

import java.io.Serializable;

public class FuerzaVoluntadVO implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	private int puntos;
	private int puntosGastados;
	
	public int getPuntos() {
		return puntos;
	}
	public void setPuntos(int puntos) {
		this.puntos = puntos;
	}
	public int getPuntosGastados() {
		return puntosGastados;
	}
	public void setPuntosGastados(int puntosGastados) {
		this.puntosGastados = puntosGastados;
	}
}
