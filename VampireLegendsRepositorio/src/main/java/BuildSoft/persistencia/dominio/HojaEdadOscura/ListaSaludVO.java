package BuildSoft.persistencia.dominio.HojaEdadOscura;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class ListaSaludVO implements Serializable{

	private static final long serialVersionUID = 1L;
	private List<SaludVO> salud;
	private SaludVO nivelSalud;
	
	public ListaSaludVO() {
		salud = new ArrayList<SaludVO>();
		nivelSalud = new SaludVO();
		
		nivelSalud.setNombre("magullado");
		nivelSalud.setEstado("sano");
		nivelSalud.setPenalizacon(-1);
		salud.add(nivelSalud);
		
		nivelSalud.setNombre("lastimado");
		nivelSalud.setEstado("sano");
		nivelSalud.setPenalizacon(-1);
		salud.add(nivelSalud);
		
		nivelSalud.setNombre("lesionado");
		nivelSalud.setEstado("sano");
		nivelSalud.setPenalizacon(-1);
		salud.add(nivelSalud);
		
		nivelSalud.setNombre("herido");
		nivelSalud.setEstado("sano");
		nivelSalud.setPenalizacon(-1);
		salud.add(nivelSalud);
		
		nivelSalud.setNombre("malherido");
		nivelSalud.setEstado("sano");
		nivelSalud.setPenalizacon(-1);
		salud.add(nivelSalud);

		nivelSalud.setNombre("tullido");
		nivelSalud.setEstado("sano");
		nivelSalud.setPenalizacon(-1);
		salud.add(nivelSalud);
				
		nivelSalud.setNombre("incapacitado");
		nivelSalud.setEstado("sano");
		nivelSalud.setPenalizacon(-1);
		salud.add(nivelSalud);
		
	}
	
}
