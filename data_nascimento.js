var NASCIMENTO = '19860417';
var fechaN = null;
var DT_ANO_NASC = 0;
var DT_MES_NASC = 0;
var DT_DIA_NASC = 0;

if(NASCIMENTO != null){
NASCIMENTO=NASCIMENTO.toString();
NASCIMENTO=NASCIMENTO.substring(0,10);

	if(NASCIMENTO.indexOf("-") != -1){
		fechaN=NASCIMENTO.split("-");
			if(fechaN.length == 3){
					DT_ANO_NASC = parseFloat(fechaN[0]);
					DT_MES_NASC =  parseFloat(fechaN[1]);
					DT_DIA_NASC =  parseFloat(fechaN[2]);
			
			}
	
	}
	else if (NASCIMENTO.indexOf("/") != -1){
		fechaN=NASCIMENTO.split("/");
			if(fechaN.length == 3){
					DT_ANO_NASC = parseFloat(fechaN[0]);
					DT_MES_NASC =  parseFloat(fechaN[1]);
					DT_DIA_NASC =  parseFloat(fechaN[2]);
					}
	}
	else if (NASCIMENTO.length == 8){
				DT_ANO_NASC = parseFloat(NASCIMENTO.substring(0,4));
				DT_MES_NASC =  NASCIMENTO.substring(4,6);
				DT_DIA_NASC =  parseFloat(NASCIMENTO.substring(6,8));
	}
	else if (NASCIMENTO.length == 6){
				DT_ANO_NASC = parseFloat(NASCIMENTO.substring(0,4));
				DT_MES_NASC =  parseFloat(NASCIMENTO.substring(4,6));
				DT_DIA_NASC =  1;
				}

}
