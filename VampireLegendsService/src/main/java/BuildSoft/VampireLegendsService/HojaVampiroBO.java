package BuildSoft.VampireLegendsService;

import BuildSoft.persistencia.dominio.HojaEdadOscura.HojaVampiroEdadOscuraVO;
import BuildSoft.persistencia.dominio.Perfil.HojaVampiroInformacionBasicaVO;
import BuildSoft.persistencia.interfaz.HojaRolInterface;
import BuildSoft.persistencia.repositorio.HojaRolRepositorio;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class HojaVampiroBO {

    private HojaRolInterface hojaRolInterface;
    private HojaVampiroEdadOscuraVO hojaVampiroEdadOscuraVO;
    private Gson gson = null;

    public HojaVampiroBO() {
        hojaRolInterface = new HojaRolRepositorio();
    }

    public HojaVampiroBO(HojaVampiroEdadOscuraVO hojaVampiroEdadOscuraVO) {
        this.hojaVampiroEdadOscuraVO = hojaVampiroEdadOscuraVO;
        hojaRolInterface = new HojaRolRepositorio();
    }

    public String consultarHojaRol(String correo, String nombre) {
        String hojaVampiroEdadOscuraVO = null;
        if (correo != null && !correo.equals("") &&
                nombre != null && !nombre.equals("")) {
            hojaVampiroEdadOscuraVO = hojaRolInterface.consultarHojaRol(correo, nombre);
        }
        return hojaVampiroEdadOscuraVO;
    }

    public String consultarHojasRol(String correo, HashMap<String, String> otrosFiltros) {
        return hojaRolInterface.consultarHojasRol(correo, otrosFiltros);
    }

    public String consultarHojasRolInformacionBasica(String correo, HashMap<String, String> otrosFiltros) {
        List<HojaVampiroInformacionBasicaVO> hojaVampiroInformacionBasicaVO = new ArrayList<HojaVampiroInformacionBasicaVO>();
        HashMap<String, List<HojaVampiroInformacionBasicaVO>> listaHojaVampiroInformacionBasicaVO = new HashMap<String, List<HojaVampiroInformacionBasicaVO>>();
        List<HojaVampiroInformacionBasicaVO> hojaVampiroEdadOscura = new ArrayList<HojaVampiroInformacionBasicaVO>();
        List<HojaVampiroInformacionBasicaVO> hojaVampiroEdadVictoriana = new ArrayList<HojaVampiroInformacionBasicaVO>();
        List<HojaVampiroInformacionBasicaVO> hojaVampiroEdadModerna = new ArrayList<HojaVampiroInformacionBasicaVO>();
        gson = new Gson();
        try {
            Type type = new TypeToken<ArrayList<HojaVampiroInformacionBasicaVO>>() {
            }.getType();
            hojaVampiroInformacionBasicaVO = gson.fromJson(hojaRolInterface.consultarHojasRol(correo, otrosFiltros), type);

            for (int i = 0; i < hojaVampiroInformacionBasicaVO.size(); i++) {
                if (hojaVampiroInformacionBasicaVO.get(i).getEdad() != null) {
                    if (hojaVampiroInformacionBasicaVO.get(i).getEdad().equals("OSCURA")) {
                        hojaVampiroEdadOscura.add(hojaVampiroInformacionBasicaVO.get(i));
                    } else if (hojaVampiroInformacionBasicaVO.get(i).getEdad().equals("VICTORIANA")) {
                        hojaVampiroEdadVictoriana.add(hojaVampiroInformacionBasicaVO.get(i));
                    } else if (hojaVampiroInformacionBasicaVO.get(i).getEdad().equals("MODERNA")) {
                        hojaVampiroEdadModerna.add(hojaVampiroInformacionBasicaVO.get(i));
                    }
                }

            }
            listaHojaVampiroInformacionBasicaVO.put("OSCURA", hojaVampiroEdadOscura);
            listaHojaVampiroInformacionBasicaVO.put("VICTORIANA", hojaVampiroEdadVictoriana);
            listaHojaVampiroInformacionBasicaVO.put("MODERNA", hojaVampiroEdadModerna);

        } catch (Exception e) {
            e.printStackTrace();
        }
        return gson.toJson(listaHojaVampiroInformacionBasicaVO);
    }

    public boolean guardarHojaRol() {
        boolean hojaVampiro = false;
        if (!hojaVampiroEdadOscuraVO.getNombre().equals("")) {
            hojaVampiro = hojaRolInterface.guardarHojaRol(hojaVampiroEdadOscuraVO);
        }
        return hojaVampiro;
    }

//	public static void main(String[] args){
//		HojaVampiroBO hvo = new HojaVampiroBO();
//		System.out.println( hvo.consultarHojasRol("cam_rod@hotmail.com", new HashMap<String,String>()));
//	}


}
