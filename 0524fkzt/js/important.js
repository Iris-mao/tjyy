//2014-10-10����ԤԼ��CRM�ӿڿ�ʼ
function addvalygbb() {
	var thisURL = document.location.href;
	var valstr = "";
    //��֤����
	var uname = $("#tj_txtname").val();
	if (uname == "" || uname == "��������������") {
		valstr += "\r*����������������";
	}
    //��֤�绰
	var uphone = $("#tj_txtphone").val();
	//��֤�绰�����ֻ�����
	if (uphone != "" && uphone != "���������ĵ绰") {
		var ab = /(^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$)|(^((\(\d{3}\))|(\d{3}\-))?(1[358]\d{9})$)/;
		if (ab.test(uphone) == false) {
			valstr += "\r*������������ȷ��ϵ��ʽ��";
		}
	} else {
		valstr += "\r*��������ϵ��ʽ��";
	}
    //��֤ԤԼ����
	var yyks = $("#tj_keshi ").val();
	if (yyks == "") {
		valstr += "\r*������ԤԼ���ң�";
	}	
    //��֤ԤԼ����
	var yyday = $("#tj_yuyue").val();
	if (yyday == "") {
		valstr += "\r*������ԤԼ���ڣ�";
	}
	if (valstr != "") {
		alert(valstr);
		return false;
	}	
    var yyys = $("#tj_doctor option:selected").text();
	var yysm = $("#tj_shuoming").val();	
    //����
	$.ajax({
		type: 'GET',
		url: 'http://api.it0733.com/Backashx/Webasker.ashx',
		dataType: 'jsonp',
		jsonp: 'jsoncallback',
		timeout: 5000,
		async: false,
		data: {
			urltype: "adduser",
			auname: uname,    //����
			aubirday: '',     //����
			auemail: '',      //����
			auage: '',        //����
			aupaper: '',      //
			aupcode: '',      //
			ausex: '',        //�Ա�
			auphone: uphone,  //�绰
			aumobile: '',     //�ֻ�
			auzhiye: '',      //ְҵ
			auxueli: '',      //ѧ��
			audanwei: '',     //������λ
			aumingzu: '',     //����
			auyoubian: '',    //�ʱ�
			asheng: '',       //ʡ
			ashi: '',         //��
			aqu: '',          //��
			adizhi: '',       //��ϸ��ַ
			ayyday: yyday,    //ԤԼ����
			ayyks: yyks,        //ԤԼ����
			ayyys: yyys,        //ԤԼҽ��
			anotes: yysm,       //��ע
			alogurl: thisURL  //��Դ��ַ
		},
		success: function(data) {
			var json = eval(data);
			if ($.trim(json[0].msg) == "data") {
				alert("��ʾ��ԤԼ��Ϣ�ύ�ɹ�����ѯԱ�ᾡ��Ϊ������");
			} else {
				alert("��ʾ��ԤԼ��Ϣ�ύʧ�ܣ�����ϵ�ͷ���");
			}
		}
	});
	return true;
}
//����ԤԼ��CRM�ӿڽ���