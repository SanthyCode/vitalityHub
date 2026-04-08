import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-artr3fin',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './artr3fin.component.html',
  styleUrls: ['./artr3fin.component.scss']
})
export class Artr3finComponent implements OnInit {
  pedidoForm!: FormGroup;
  isDarkMode: boolean = true; // 🌙 Dark mode por defecto
  
  // ⚠️ REEMPLAZA CON TUS DATOS
  private readonly scriptURL = 'https://script.google.com/macros/s/AKfycbwfIyAPFHHAhtB6uvtGgGSMaMxpSSldayPlLA7OyL4-ajhiZZa1k6v6rgwgTK7s2yTF/exec'; 
  private readonly miNumeroWpp = '573016743186'; 

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.pedidoForm = this.fb.group({
      producto: ['', Validators.required],
      nombre: ['', Validators.required],
      numero: ['', Validators.required],
      departamento: ['', Validators.required],
      ciudad: ['', Validators.required],
      barrio: ['', Validators.required],
      direccion: ['', Validators.required],
      detalle: [''], 
      correo: ['', [Validators.required, Validators.email]]
    });
  }

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
  }

  onSubmit(): void {
    if (this.pedidoForm.invalid) {
      this.pedidoForm.markAllAsTouched(); 
      return;
    }

    const data = this.pedidoForm.value;
    const formData = new FormData();
    Object.keys(data).forEach(key => {
      formData.append(key, data[key]);
    });

    const mensajeWpp = `¡Hola! Quiero hacer un pedido:
*Producto:* ${data.producto}
*Nombre:* ${data.nombre}
*Contacto:* ${data.numero} / Wpp: ${data.whatsapp}
*Ubicación:* ${data.departamento}, ${data.ciudad}, ${data.barrio}
*Dirección:* ${data.direccion} ${data.detalle ? `(${data.detalle})` : ''}
*Correo:* ${data.correo}`;

    const urlWhatsApp = `https://wa.me/${this.miNumeroWpp}?text=${encodeURIComponent(mensajeWpp)}`;

    fetch(this.scriptURL, { method: 'POST', body: formData, mode: 'no-cors' })
      .then(() => { window.location.href = urlWhatsApp; })
      .catch(error => {
        console.error('Error al guardar en el Excel:', error);
        window.location.href = urlWhatsApp;
      });
  }
}