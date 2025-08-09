# VisApp React - Sistema de Residencia Permanente

Este proyecto es una conversión de los mockups HTML/JS originales a una aplicación React moderna para el sistema de gestión de residencia permanente.

## Características

### Vista Aplicante
- **Página Principal**: Interfaz para solicitar residencia permanente
- **Solicitud de Residencia**: Formulario dinámico según país de origen
- **Consulta de Estado**: Verificación del estado de solicitudes
- **Resultado de Solicitud**: Confirmación de envío exitoso

### Panel Administrativo
- **Login de Administradores**: Autenticación con RUT y clave
- **Selector de Rol**: Elección entre Usuario, Administrador y Super Usuario
- **Dashboard de Usuario**: Vista simplificada para usuarios básicos
- **Dashboard de Administrador**: Gestión de solicitudes con revisión de documentos
- **Dashboard de Super Usuario**: Gestión completa con administradores, solicitudes y reportes

## Tecnologías Utilizadas

- **React 18** con TypeScript
- **React Router DOM** para navegación
- **CSS3** con estilos personalizados basados en los mockups originales

## Estructura del Proyecto

```
src/
├── components/
│   ├── aplicante/
│   │   ├── AplicanteHome.tsx
│   │   ├── SolicitarResidencia.tsx
│   │   ├── EstadoSolicitud.tsx
│   │   └── ResultadoSolicitud.tsx
│   └── admin/
│       ├── LoginAdmin.tsx
│       ├── SeleccionRol.tsx
│       ├── DashboardUsuario.tsx
│       ├── DashboardAdministrador.tsx
│       └── DashboardSuperUsuario.tsx
├── App.tsx
├── App.css
└── index.tsx
```

## Rutas Disponibles

### Vista Aplicante
- `/` - Página principal
- `/solicitar` - Formulario de solicitud
- `/estado` - Consulta de estado
- `/resultado` - Confirmación de solicitud

### Panel Administrativo
- `/admin/login` - Login de administradores
- `/admin/rol` - Selector de rol
- `/admin/usuario` - Dashboard de usuario
- `/admin/administrador` - Dashboard de administrador
- `/admin/super-usuario` - Dashboard de super usuario

## Instalación y Ejecución

1. **Instalar dependencias**:
   ```bash
   npm install
   ```

2. **Ejecutar en modo desarrollo**:
   ```bash
   npm start
   ```

3. **Construir para producción**:
   ```bash
   npm run build
   ```

## Funcionalidades Principales

### Vista Aplicante
- Formularios dinámicos según país de origen (Colombia, Venezuela, etc.)
- Validación de documentos requeridos
- Consulta de estado de solicitudes
- Interfaz responsive y accesible

### Panel Administrativo
- **Login seguro** con validación de credenciales
- **Gestión de solicitudes** con revisión de documentos
- **Sistema de roles** con diferentes niveles de acceso
- **Reportes y estadísticas** para super usuarios
- **Interfaz de revisión** de documentos con imágenes

## Estilos y Diseño

El proyecto mantiene la identidad visual de los mockups originales:
- Colores de la bandera chilena (#0f69b4 y #eb3c46)
- Tipografía Roboto Slab
- Diseño responsive
- Componentes reutilizables

## Mejoras Implementadas

1. **Arquitectura React**: Componentes modulares y reutilizables
2. **TypeScript**: Tipado estático para mayor seguridad
3. **React Router**: Navegación SPA sin recargas
4. **Estado Reactivo**: Gestión de estado con hooks
5. **Responsive Design**: Adaptable a diferentes dispositivos
6. **Accesibilidad**: Mejoras en navegación por teclado y lectores de pantalla

## Próximas Mejoras

- [ ] Integración con backend real
- [ ] Autenticación JWT
- [ ] Persistencia de datos
- [ ] Tests unitarios
- [ ] Optimización de rendimiento
- [ ] PWA (Progressive Web App)

## Contribución

Para contribuir al proyecto:

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -am 'Agrega nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Crea un Pull Request

## Licencia

Este proyecto es parte de una tesis universitaria sobre sistemas de gestión de residencia permanente.
