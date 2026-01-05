<%@LANGUAGE = VBSCRIPT%> 

<html><title>Thank You</title>
<body bgcolor="#FFFFFF" leftmargin="0" topmargin="0" marginwidth="0" marginheight="0">



<%
Dim iMsg 
Dim iConf 
Dim Flds 
Dim strHTML

Const cdoSendUsingPort = 2

set iMsg = CreateObject("CDO.Message")
set iConf = CreateObject("CDO.Configuration")

Set Flds = iConf.Fields

With Flds

    .Item("http://schemas.microsoft.com/cdo/configuration/sendusing") = cdoSendUsingPort
    .Item("http://schemas.microsoft.com/cdo/configuration/smtpserverport") = 25
    .Item("http://schemas.microsoft.com/cdo/configuration/smtpserver") = "www.ianryan.com"
    .Item("http://schemas.microsoft.com/cdo/configuration/smtpconnectiontimeout") = 60
    .Item("http://schemas.microsoft.com/cdo/configuration/smtpauthenticate") = cdoBasic
    .Update
End With
'________________________________________

strHTML = "Name: "&Request.QueryString("uname")&"<br>"
strHTML = strHTML &"Score: "&Request.QueryString("uscore")&"<br>"
strHTML = strHTML &"Date: "&Request.QueryString("udate")&"<br>"


'strHTML = "<HTML>"
'strHTML = strHTML & "<HEAD>"
'strHTML = strHTML & "<BODY>"
'strHTML = strHTML & "<b>"&Response.Write "Name: "&Request.QueryString("uname")&"<br>"
'strHTML = strHTML & "<b> Score: </b></br>"
'strHTML = strHTML & "<b> Date: </b></br>"
'strHTML = strHTML & "<b> Date: </b></br>"
'strHTML = strHTML & "</BODY>"
'strHTML = strHTML & "</HTML>"
'__________________________________________

With iMsg
    Set .Configuration = iConf
    .To = "jeff@ianryan.com" 
    .cc = "kirk@ianryan.com"
    .From = "jeff@ianryan.com" 
    '.ReplyTo = "jeff@ianryan.com"
    .Subject = Request.QueryString("uname")&"'s Jeopardy Score"
    .HTMLBody = strHTML
    .Send
End With
'____________________________________________

Set iMsg = Nothing
Set iConf = Nothing
Set Flds = Nothing
%>


<center>
  <table width="300" border="0" cellspacing="0" cellpadding="0" height="160">
    <tr> 
      <td width="92%" height="42"> <p align="center"><b><font size="2" color="#18529C" face="Verdana, Arial, Helvetica, sans-serif"> 
          <font color="#0000CC">Thank You!<br>
          </font></font><font color="#0000CC" size="1" face="Verdana, Arial, Helvetica, sans-serif">Your 
          results have been sent! </font></b></p></td>
    </tr>
    <tr> 
      <td width="92%"> <b>
        <%Response.Write "Name: "&Request.QueryString("uname")%>
        <br> <b>
        <%Response.Write "Score: "&Request.QueryString("uscore")%>
        <br> <b>
        <%Response.Write "Date: "&Request.QueryString("udate")%>
        <br> </td>
    </tr>
    <tr>
      <td height="19"><div align="center"></div></td>
	  
    </tr>
  </table>
</center>
<form> 
<div align="center"> 
<input type="Button" value="Close" onClick="self.close()" name="Button"> 
</div> 
</form>
</body>
</html>
