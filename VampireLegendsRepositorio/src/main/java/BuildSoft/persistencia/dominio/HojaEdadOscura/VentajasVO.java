package BuildSoft.persistencia.dominio.HojaEdadOscura;

import java.io.Serializable;
import java.util.List;

public class VentajasVO implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	private List<Transfondos> transfondos;
	private VirtudesVO virtudes;
	
	public List<Transfondos> getTransfondos() {
		return transfondos;
	}
	public void setTransfondos(List<Transfondos> transfondos) {
		this.transfondos = transfondos;
	}
	public VirtudesVO getVirtudes() {
		return virtudes;
	}
	public void setVirtudes(VirtudesVO virtudes) {
		this.virtudes = virtudes;
	}
	
	
	
	
}
