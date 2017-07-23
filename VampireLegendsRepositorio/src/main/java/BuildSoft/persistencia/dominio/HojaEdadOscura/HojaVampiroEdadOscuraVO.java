package BuildSoft.persistencia.dominio.HojaEdadOscura;

import java.io.Serializable;
import java.util.List;

import BuildSoft.persistencia.dominio.HojaVampiroVO;

public class HojaVampiroEdadOscuraVO extends HojaVampiroVO implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	private String nombre;
	private String jugador;
	private String cronica;
	private String natulareza;
	private String conducta;
	private ClanVO clan;
	private GeneracionVO generacion;
	private String concepto;
	private String refugio;
	private AtributosVO atributos;
	private HabilidadesVO habilidades;
	private VentajasVO ventajas;
	private MeritosDefectosVO[] meritosDefectos;
	private CaminoVO camino;
	private FuerzaVoluntadVO fuerzaVoluntad;
	private List<SaludVO> salud;
	private ExperienciaVO experiencia;
	
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getJugador() {
		return jugador;
	}
	public void setJugador(String jugador) {
		this.jugador = jugador;
	}
	public String getCronica() {
		return cronica;
	}
	public void setCronica(String cronica) {
		this.cronica = cronica;
	}
	public String getNatulareza() {
		return natulareza;
	}
	public void setNatulareza(String natulareza) {
		this.natulareza = natulareza;
	}
	public String getConducta() {
		return conducta;
	}
	public void setConducta(String conducta) {
		this.conducta = conducta;
	}
	public ClanVO getClan() {
		return clan;
	}
	public void setClan(ClanVO clan) {
		this.clan = clan;
	}
	public GeneracionVO getGeneracion() {
		return generacion;
	}
	public void setGeneracion(GeneracionVO generacion) {
		this.generacion = generacion;
	}
	public String getConcepto() {
		return concepto;
	}
	public void setConcepto(String concepto) {
		this.concepto = concepto;
	}
	public String getRefugio() {
		return refugio;
	}
	public void setRefugio(String refugio) {
		this.refugio = refugio;
	}
	public AtributosVO getAtributos() {
		return atributos;
	}
	public void setAtributos(AtributosVO atributos) {
		this.atributos = atributos;
	}
	public HabilidadesVO getHabilidades() {
		return habilidades;
	}
	public void setHabilidades(HabilidadesVO habilidades) {
		this.habilidades = habilidades;
	}
	public VentajasVO getVentajas() {
		return ventajas;
	}
	public void setVentajas(VentajasVO ventajas) {
		this.ventajas = ventajas;
	}
	public MeritosDefectosVO[] getMeritosDefectos() {
		return meritosDefectos;
	}
	public void setMeritosDefectos(MeritosDefectosVO[] meritosDefectos) {
		this.meritosDefectos = meritosDefectos;
	}
	public CaminoVO getCamino() {
		return camino;
	}
	public void setCamino(CaminoVO camino) {
		this.camino = camino;
	}
	public FuerzaVoluntadVO getFuerzaVoluntad() {
		return fuerzaVoluntad;
	}
	public void setFuerzaVoluntad(FuerzaVoluntadVO fuerzaVoluntad) {
		this.fuerzaVoluntad = fuerzaVoluntad;
	}
	public List<SaludVO> getSalud() {
		return salud;
	}

	public void setSalud(List<SaludVO> salud) {
		this.salud = salud;
	}

	public ExperienciaVO getExperiencia() {
		return experiencia;
	}
	public void setExperiencia(ExperienciaVO experiencia) {
		this.experiencia = experiencia;
	}
}