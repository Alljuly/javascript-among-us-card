# Crie sua carteirinha de tripulante para embarcar

## O primeiro passo para refatorar o código será trocar coisas como isso: 

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
### por componetes feitos com javascript

### O que vai deixar nosso código mais ou menos assim

```html
  <formComponent>
      <inputComponent type="Name">
    </formComponent>
```

## Depois será necessário reimplementar a lógica para funcionar com os components

