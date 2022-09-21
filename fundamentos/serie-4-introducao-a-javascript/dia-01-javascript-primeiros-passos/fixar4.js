const status = "reprovada";

switch(status) {
    case 'aprovada':
        console.log("parabéns");
        break;
    case 'lista':
        console.log("você está na lista de espera");
        break;
    case "reprovada":
        console.log("você foi reprovada");
        break;
    default:
        console.log("info incorreta");
        break;
}