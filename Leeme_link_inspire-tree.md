Para cambiar la referencia de un paquete Node.js como `inspire-tree` en `inspire-tree-dom` para que use el código fuente local en lugar del paquete instalado desde npm, puedes seguir estos pasos:

---

### **1. Preparar el proyecto local de `inspire-tree`**
Asegúrate de que el código fuente de `inspire-tree` esté listo para ser utilizado como dependencia local:
1. **Clona el repositorio de `inspire-tree`** si no lo has hecho:
   ```bash
   git clone https://github.com/your-repository/inspire-tree.git
   cd inspire-tree
   ```

2. **Instala las dependencias y compila (si es necesario)**:
   ```bash
   npm install
   npm run build
   ```
   Si el proyecto no requiere compilación, este paso puede omitirse.

3. **Haz que `inspire-tree` esté disponible globalmente como un enlace local**:
   ```bash
   npm link
   ```

---

### **2. Cambiar la referencia en `inspire-tree-dom`**
1. **Clona o navega al repositorio de `inspire-tree-dom`**:
   ```bash
   cd /ruta/a/inspire-tree-dom
   ```

2. **Instala las dependencias existentes**:
   ```bash
   npm install
   ```

3. **Conecta `inspire-tree` localmente en lugar del paquete de npm**:
   Usa el comando `npm link` para apuntar la dependencia a tu versión local de `inspire-tree`:
   ```bash
   npm link inspire-tree
   ```

   Este comando hará que `inspire-tree-dom` use la versión local de `inspire-tree` en lugar de la publicada en npm.

---

### **3. Verifica que el enlace funciona**
1. Ejecuta los scripts del proyecto (`npm start`, `npm run dev`, etc.) en `inspire-tree-dom`.
2. Si necesitas hacer cambios en el código fuente de `inspire-tree`, asegúrate de volver a compilarlo si usa un lenguaje como TypeScript o tiene un paso de construcción.

---

### **4. Alternativa: Usar Referencias Relativas**
Si prefieres no usar `npm link`, puedes usar referencias directas al directorio local en el archivo `package.json`:
1. Abre el `package.json` de `inspire-tree-dom`.
2. Cambia la dependencia de `inspire-tree` para que apunte a la carpeta local:
   ```json
   {
     "dependencies": {
       "inspire-tree": "file:../ruta/al/codigo/fuente/inspire-tree"
     }
   }
   ```

3. Ejecuta nuevamente:
   ```bash
   npm install
   ```

Esto instalará la versión local de `inspire-tree` como una dependencia.

---

### **5. Nota sobre Peer Dependencies**
Si `inspire-tree` está configurado como una `peerDependency`, los pasos anteriores deberían funcionar siempre que se cumpla la versión requerida. Verifica que la versión local coincida con la especificada en `peerDependencies` de `inspire-tree-dom`.

---

### **Consejo Adicional**
Cuando hagas cambios en `inspire-tree`, asegúrate de que los cambios sean visibles en `inspire-tree-dom`. Esto ocurre automáticamente con `npm link`, pero si usas la referencia `file:`, debes reinstalar la dependencia cada vez que realices cambios en el código fuente.

--- 

Con esto, tendrás `inspire-tree-dom` utilizando tu versión local de `inspire-tree`. 🎉