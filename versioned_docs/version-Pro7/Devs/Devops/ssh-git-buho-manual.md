# Configuración SSH para git.buho.la

> ⚠️ **IMPORTANTE**: Esta guía te permitirá configurar claves SSH para acceder a git.buho.la sin necesidad de introducir contraseñas cada vez que hagas push/pull.

---

## 📋 Requisitos Previos

- ✅ Terminal/Consola de comandos
- ✅ Git instalado en tu sistema
- ✅ Cuenta activa en git.buho.la

---

## 🚀 Paso 1: Generar Nueva Clave SSH

```bash
ssh-keygen -t ed25519 -f ~/.ssh/<nombre_de_tu_clave_ssh> -C <tu_email@ejemplo.com>
```

> 💡 **TIP**: Reemplaza `<nombre_de_tu_clave_ssh>` con un nombre descriptivo como `git_buho` y `<tu_email@ejemplo.com>` con tu email real.

### Ejemplo:
```bash
ssh-keygen -t ed25519 -f ~/.ssh/git_buho -C juan.perez@email.com
```

---

## 🔄 Paso 2: Iniciar SSH Agent

```bash
eval "$(ssh-agent -s)"
```

> ℹ️ **INFO**: Esto inicia el agente SSH que manejará tus claves de forma segura.

---

## 🔑 Paso 3: Añadir Clave al SSH Agent

```bash
ssh-add ~/.ssh/<tu_clave_ssh>
```

### Ejemplo:
```bash
ssh-add ~/.ssh/git_buho
```

> ⚠️ **ATENCIÓN**: Asegúrate de usar el mismo nombre que definiste en el Paso 1.

---

## ⚙️ Paso 4: Configurar SSH Config

Crea o edita el archivo de configuración SSH:

```bash
nano ~/.ssh/config
```

Añade el siguiente contenido:

```bash
# Configuración para git.buho.la 
Host git.buho.la
    Hostname git.buho.la
    Port 2224                          # ⚠️ ¡PUERTO ESPECÍFICO!
    User git                           # ⚠️ ¡SIEMPRE 'git'!
    IdentityFile ~/.ssh/<tu_clave_ssh> # ⚠️ ¡TU CLAVE AQUÍ!
    IdentitiesOnly yes
```

> 🚨 **CRITICAL**: 
> - **Puerto**: Debe ser exactamente `2224`
> - **Usuario**: Siempre debe ser `git`
> - **IdentityFile**: Debe coincidir con el nombre de tu clave

### Ejemplo completo:
```bash
# Configuración para git.buho.la 
Host git.buho.la
    Hostname git.buho.la
    Port 2224
    User git
    IdentityFile ~/.ssh/git_buho
    IdentitiesOnly yes
```

---

## 📤 Paso 5: Obtener Clave Pública

```bash
cat ~/.ssh/<tu_clave_ssh>.pub
```

### Ejemplo:
```bash
cat ~/.ssh/git_buho.pub
```

> 📋 **ACCIÓN**: Copia todo el contenido que se muestra en pantalla.

---

## 🌐 Paso 6: Añadir Clave a git.buho.la

1. 🔗 Accede a tu cuenta en git.buho.la
2. 👤 Ve a tu perfil/configuración
3. 🔑 Busca la sección "SSH Keys" 
4. ➕ Haz clic en "Añadir nueva clave"
5. 📋 Pega la clave pública copiada en el paso anterior
6. 💾 Guarda los cambios

---

## ✅ Paso 7: Verificar Conexión

```bash
ssh -T git@git.buho.la
```

> 🎉 **ÉXITO**: Si ves un mensaje de bienvenida o confirmación, ¡la configuración está correcta!

---

## 🧪 Paso 8: Probar con un Repositorio

```bash
git clone git@git.buho.la:usuario/nombre-repositorio.git
```

> 🚀 **RESULTADO**: El repositorio debería clonarse sin pedir contraseña.

---

## 🛠️ Solución de Problemas Comunes

### ❌ Error de Configuración Previa

Si tienes configuraciones antiguas de Git, puede haber conflictos:

#### Opción 1: Editar con Nano
```bash
nano ~/.ssh/config
```
- 🗑️ Elimina todas las líneas que contengan `git.buho.la` anteriores
- 🗑️ Elimina configuraciones obsoletas de otros servicios Git

#### Opción 2: Editar con Editor de Código
1. 📝 Abre `~/.ssh/config` con tu editor favorito
2. 🗑️ Busca y elimina entradas duplicadas o conflictivas
3. 💾 Guarda los cambios

### 🔄 Reiniciar Configuración
Si sigues teniendo problemas:

```bash
# Eliminar claves del agente
ssh-add -D

# Volver a añadir tu clave
ssh-add ~/.ssh/<tu_clave_ssh>

# Probar conexión nuevamente
ssh -T git@git.buho.la
```

---

## 📝 Notas Importantes

> 🔒 **SEGURIDAD**: Nunca compartas tu clave privada (archivo sin extensión .pub)

> 🌍 **PUERTO**: git.buho.la usa el puerto 2224, no el estándar 22

> 👤 **USUARIO**: El usuario SSH siempre es 'git', no tu nombre de usuario de la plataforma

> 🔄 **MÚLTIPLES CLAVES**: Puedes tener diferentes claves para diferentes servicios

---

## 🎯 Resumen de Comandos

```bash
# 1. Generar clave
ssh-keygen -t ed25519 -f ~/.ssh/git_buho -C tu_email@ejemplo.com

# 2. Iniciar agente
eval "$(ssh-agent -s)"

# 3. Añadir clave
ssh-add ~/.ssh/git_buho

# 4. Ver clave pública
cat ~/.ssh/git_buho.pub

# 5. Probar conexión
ssh -T git@git.buho.la
```

---

## 🆘 ¿Necesitas Ayuda?

Si encuentras problemas:
- 📚 Revisa cada paso cuidadosamente
- 🔍 Verifica que los nombres de archivo coincidan
- 🌐 Asegúrate de que el puerto sea 2224
- 🔄 Reinicia tu terminal y vuelve a intentar

---

*📅 Última actualización: Agosto 2025*