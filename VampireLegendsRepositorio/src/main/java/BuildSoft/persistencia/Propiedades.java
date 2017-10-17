package BuildSoft.persistencia;

import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;


public class Propiedades {

    private static String propFileName = "configBD.properties";
    private InputStream inputStream;
    private Properties prop = null;

    public Propiedades() {
        prop = new Properties();
        inputStream = getClass().getClassLoader().getResourceAsStream(propFileName);
        getProp();
    }

    public static void main(String[] args) {
        Propiedades a = new Propiedades();
        String b = a.getPropValues("ip");
        System.out.println(b);
    }

    public void setInputNameFile(String propFileName) {
        Propiedades.propFileName = propFileName;
    }

    private void getProp() {
        try {
            if (inputStream != null) {
                prop.load(inputStream);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public String getPropValues(String key) {
        String valor = "";
        try {
            inputStream = getClass().getClassLoader().getResourceAsStream(propFileName);
            valor = prop.getProperty(key);
            inputStream.close();
        } catch (IOException e) {
            e.printStackTrace();
        }

        return valor;
    }

}
