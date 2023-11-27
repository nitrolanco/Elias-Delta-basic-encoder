function elias_delta_encoder(number)
{
    number = parseInt(number);
    let encoded_string = "";
    let n_delta = Math.floor(Math.log2(number));
    let l_delta = Math.floor(Math.log2(n_delta+1));
    for(let i = 0 ;  i < l_delta; i++)
    {
        encoded_string += "0";
    }
    let n__delta_copy = n_delta;
    let number_copy = number;
    let n_plus_one_bit = get_binary_representation(n_delta+1);
    encoded_string += n_plus_one_bit;
    let n_last_bits = "";
    if(n_delta > 0){
       
        n_last_bits = get_binary_representation(number).substring(1);
    }
    encoded_string += n_last_bits;
    return encoded_string;
}
function get_binary_representation (number)
{

    let bit_dict = {};
    let bit_representation = "";
    if (number== 0 ){
        return "0";
    }
    for (let i = Math.floor(Math.log2(number))+1 ; i > 0 ; i--)
    {
        //console.log( number - Math.pow(2,i-1))
        if ((number - Math.pow(2,i-1)) >= 0){
        
            bit_dict[i] = 1;
            number -= Math.pow(2,i-1);
            //console.log(number);
        }
        else{
            bit_dict[i] = 0;
        }
    }
    for(var key in bit_dict)
    {
        bit_representation+= bit_dict[key];
    }
    //console.log(reverseString(bit_representation));
    return reverseString(bit_representation);
}
function reverseString(str) {
    return str.split("").reverse().join("");
}

function ekisde(numero){
   let num = elias_delta_encoder(numero);
   document.getElementById("show_encoded").innerHTML= num;
}


document.querySelector("#numero").addEventListener("keyup", () => ekisde(document.getElementById("numero").value));