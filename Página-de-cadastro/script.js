jQuery.validator.setDefaults({
    debug: true,
    success: "valid"
  });
  $( "#formulario" ).validate({
    rules: {
        inputSenha:"required",
        inputConfirmaSenha: {
        equalTo: "#inputSenha",
        required: true
        
      },
      inputNome: {
        required: true,
        
      },
      inputEmail: {
        required: true,
        email: true
      }
    },
    messages: {
        inputSenha: {
          required: "Escolha uma senha",
        },
        inputEmail: {
          required: "Insira um email",
          email: " insira um email válido"
        },
        inputNome: {
          required: "Insira um nome",
          
        },
        inputConfirmaSenha: {
            equalTo: "As senhas não são iguais",
            required: "Confirme a senha"
        }
      },
      submitHandler: function(form) {
        // código para submissão do formulário
      }
  });