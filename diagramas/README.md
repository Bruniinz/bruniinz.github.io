# Diagramas PlantUML - SGHSS VIDA+

Este diretório contém os diagramas do projeto em formato PlantUML.

## Arquivos Disponíveis

1. **casos-de-uso.puml** - Diagrama de Casos de Uso
2. **der.puml** - Diagrama Entidade-Relacionamento (DER)
3. **diagrama-classes.puml** - Diagrama de Classes

## Como Visualizar os Diagramas

### Opção 1: Online (Recomendado)

1. Acesse: http://www.plantuml.com/plantuml/uml/
2. Copie o conteúdo do arquivo `.puml` desejado
3. Cole no editor online
4. O diagrama será gerado automaticamente

### Opção 2: VS Code

1. Instale a extensão "PlantUML" no VS Code
2. Abra o arquivo `.puml`
3. Pressione `Alt+D` para visualizar o diagrama

### Opção 3: Java (Local)

1. Instale Java: https://www.java.com/
2. Baixe o PlantUML JAR: http://plantuml.com/download
3. Execute:
```bash
java -jar plantuml.jar diagramas/casos-de-uso.puml
```

### Opção 4: Docker

```bash
docker run -d -p 8080:8080 plantuml/plantuml-server:jetty
# Acesse http://localhost:8080
```

## Gerar Imagens

Para gerar imagens PNG ou SVG:

```bash
# Com Java
java -jar plantuml.jar -tpng diagramas/*.puml
java -jar plantuml.jar -tsvg diagramas/*.puml

# Com Docker
docker run --rm -v $(pwd):/work plantuml/plantuml -tpng /work/diagramas/*.puml
```

## Referências

- Documentação PlantUML: http://plantuml.com/
- Guia de Sintaxe: http://plantuml.com/guide

