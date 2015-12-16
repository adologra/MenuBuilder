/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var schema = {Schema: [
    {id:'nod1', title: 'News', classStyle:'news', titleHtml: 'Noticias Destacadas', url:"news"},
    {id:'nod2', title:'Sport', titleHtml: 'Noticias Deportes'},
    {id:'nod3',title: 'Weather', titleHtml: 'Noticias Tiempo'},
    {id:'nod4',title: 'Capital', titleHtml: 'Noticias Locales'},
    {id:'nod5',title: 'Culture', titleHtml: 'Eventos Culturales'},
    {id:'nod6',title: 'Autos', titleHtml: 'Noticias Coches'},
    {id:'nod7',
                                    title: 'TV', 
                                    titleHtml: 'Programación de Televisión',
                                    subschema:{
                                        corazon:{
                                            id:'nod7Corazon',
                                            title: 'Corazón',
                                            titleHtml:'Programas del Corazon'
                                        },
                                        entretenimiento:{
                                            id:'nod7Entretenimiento',
                                            title:'Entretenimiento',
                                            titleHtml:'Programas de Entretenimiento'
                                        },
                                        historia:{
                                            id:'nod7Historia',
                                            title:'Historia',
                                            titleHtml:'Programas de Historia'
                                        },
                                        cultura:{
                                            id: 'nod7Cultura',
                                            title:'Cultura',
                                            titleHtml:'Programas de Cultura'
                                        }
                                    }
                                },
    {id:'nod8',title: 'Radio', titleHtml:'Programación de Radio'},
    {id:'nod9',title: 'More....', titleHtml:'Otros'}
]};


