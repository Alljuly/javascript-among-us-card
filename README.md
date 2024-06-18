# Crie sua carteirinha de tripulante para embarcar
## Projeto feito para ser avaliado na matéria de introdução às tecnologias de desenvolvimento WEB do Curso de Sistemas de informação

### Meu processo refazendo o projeto
- Inicialmente todo o codigo foi feio com um arquivo html, js e algumas imagens. e estava com a seguinte aparência:

![image](https://github.com/Alljuly/javascript-amongus-card-generator/assets/86618692/6ba5b2b3-37d1-4ce7-8cd5-a636f7561879)

- Aparência esperada ao final do projeto :
  
![image](https://github.com/Alljuly/javascript-amongus-card-generator/assets/86618692/88214b6c-d64f-4720-a896-3b9ba65b979a)




- O primeiro passo para refatorar o código será trocar coisas como isso: 

```html
<div id="content-form" class="content">
          <div class="dataname">
            <label
              >Nome:
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Primeiro nome"
                required
              />
            </label>
          </div>
```

- por componentes feitos com javascript. O que vai deixar nosso código mais ou menos assim

```html
  <formComponent>
      <inputComponent type="Name">
    </formComponent>
```
- Obviamente, esse tipo de implentação deixa o projeto com uma complexidade desnecessária, que poderia facilmente ser resolvida frameworks como Angular, ou o próprio React.
- A única motivação para manter o javascript nesse caso é revisar js, conceitos de shadow DOM, e CSS.
- no meu [repositório de angular](https://github.com/Alljuly/angular-desenvolvimento-frontend/tree/main/Fundamentos%20Angular/Web%20Components) voce pode encontrar outro projeto onde eu usei esse tipo de componentização
### Depois será necessário reimplementar a lógica para funcionar com novos componentes

