import React, { useState, useEffect } from 'react';
import api from './services/api';
import './App.css';

function App() {
  const [abaAtiva, setAbaAtiva] = useState('egressos');
  
  const [egressos, setEgressos] = useState([]);
  const [oficinas, setOficinas] = useState([]);
  const [oportunidades, setOportunidades] = useState([]);

  // Estados dos formulários
  const [formEgresso, setFormEgresso] = useState({ nome: '', email: '', telefone: '', habilidades: '' });
  const [formOficina, setFormOficina] = useState({ titulo: '', descricao: '', cargaHoraria: '', instrutor: '' });
  const [formOportunidade, setFormOportunidade] = useState({ titulo: '', empresa: '', descricao: '', requisitos: '' });

  useEffect(() => {
    carregarDados();
  }, [abaAtiva]);

  const carregarDados = async () => {
    try {
      if (abaAtiva === 'egressos') {
        const res = await api.get('/egressos');
        setEgressos(res.data);
      } else if (abaAtiva === 'oficinas') {
        const res = await api.get('/oficinas');
        setOficinas(res.data);
      } else if (abaAtiva === 'oportunidades') {
        const res = await api.get('/oportunidades');
        setOportunidades(res.data);
      }
    } catch (error) {
      console.error("Erro ao carregar dados:", error);
    }
  };

  const salvarEgresso = async (e) => {
    e.preventDefault();
    await api.post('/egressos', formEgresso);
    setFormEgresso({ nome: '', email: '', telefone: '', habilidades: '' });
    carregarDados();
  };

  const salvarOficina = async (e) => {
    e.preventDefault();
    await api.post('/oficinas', formOficina);
    setFormOficina({ titulo: '', descricao: '', cargaHoraria: '', instrutor: '' });
    carregarDados();
  };

  const salvarOportunidade = async (e) => {
    e.preventDefault();
    await api.post('/oportunidades', formOportunidade);
    setFormOportunidade({ titulo: '', empresa: '', descricao: '', requisitos: '' });
    carregarDados();
  };

  const deletar = async (tipo, id) => {
    await api.delete(`/${tipo}/${id}`);
    carregarDados();
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '900px', margin: '0 auto' }}>
      <h1>Recomeço Profissional</h1>
      <p>Plataforma de Apoio à Inclusão de Profissionais Egressos (ODS 8 e 10)</p>

      <div style={{ marginBottom: '20px' }}>
        <button onClick={() => setAbaAtiva('egressos')} style={{ marginRight: '10px', padding: '10px' }}>Egressos</button>
        <button onClick={() => setAbaAtiva('oficinas')} style={{ marginRight: '10px', padding: '10px' }}>Oficinas</button>
        <button onClick={() => setAbaAtiva('oportunidades')} style={{ padding: '10px' }}>Oportunidades</button>
      </div>

      <hr />

      {/* ABA EGRESSOS */}
      {abaAtiva === 'egressos' && (
        <div>
          <h2>Gestão de Egressos</h2>
          <form onSubmit={salvarEgresso} style={{ display: 'grid', gap: '10px', marginBottom: '20px' }}>
            <input placeholder="Nome" value={formEgresso.nome} onChange={e => setFormEgresso({...formEgresso, nome: e.target.value})} required />
            <input placeholder="E-mail" value={formEgresso.email} onChange={e => setFormEgresso({...formEgresso, email: e.target.value})} required />
            <input placeholder="Telefone" value={formEgresso.telefone} onChange={e => setFormEgresso({...formEgresso, telefone: e.target.value})} />
            <textarea placeholder="Habilidades" value={formEgresso.habilidades} onChange={e => setFormEgresso({...formEgresso, habilidades: e.target.value})} />
            <button type="submit">Cadastrar Egresso</button>
          </form>

          <ul>
            {egressos.map(item => (
              <li key={item.id} style={{ marginBottom: '10px' }}>
                <strong>{item.nome}</strong> ({item.email}) - {item.habilidades} 
                <button onClick={() => deletar('egressos', item.id)} style={{ marginLeft: '10px', color: 'red' }}>Excluir</button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* ABA OFICINAS */}
      {abaAtiva === 'oficinas' && (
        <div>
          <h2>Gestão de Oficinas de Capacitação</h2>
          <form onSubmit={salvarOficina} style={{ display: 'grid', gap: '10px', marginBottom: '20px' }}>
            <input placeholder="Título da Oficina" value={formOficina.titulo} onChange={e => setFormOficina({...formOficina, titulo: e.target.value})} required />
            <input placeholder="Descrição" value={formOficina.descricao} onChange={e => setFormOficina({...formOficina, descricao: e.target.value})} />
            <input type="number" placeholder="Carga Horária (horas)" value={formOficina.cargaHoraria} onChange={e => setFormOficina({...formOficina, cargaHoraria: e.target.value})} />
            <input placeholder="Instrutor" value={formOficina.instrutor} onChange={e => setFormOficina({...formOficina, instrutor: e.target.value})} />
            <button type="submit">Cadastrar Oficina</button>
          </form>

          <ul>
            {oficinas.map(item => (
              <li key={item.id} style={{ marginBottom: '10px' }}>
                <strong>{item.titulo}</strong> (Instrutor: {item.instrutor}) - {item.cargaHoraria}h
                <button onClick={() => deletar('oficinas', item.id)} style={{ marginLeft: '10px', color: 'red' }}>Excluir</button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* ABA OPORTUNIDADES */}
      {abaAtiva === 'oportunidades' && (
        <div>
          <h2>Oportunidades de Trabalho</h2>
          <form onSubmit={salvarOportunidade} style={{ display: 'grid', gap: '10px', marginBottom: '20px' }}>
            <input placeholder="Título da Vaga" value={formOportunidade.titulo} onChange={e => setFormOportunidade({...formOportunidade, titulo: e.target.value})} required />
            <input placeholder="Empresa" value={formOportunidade.empresa} onChange={e => setFormOportunidade({...formOportunidade, empresa: e.target.value})} required />
            <textarea placeholder="Descrição da Vaga" value={formOportunidade.descricao} onChange={e => setFormOportunidade({...formOportunidade, descricao: e.target.value})} />
            <textarea placeholder="Requisitos" value={formOportunidade.requisitos} onChange={e => setFormOportunidade({...formOportunidade, requisitos: e.target.value})} />
            <button type="submit">Cadastrar Oportunidade</button>
          </form>

          <ul>
            {oportunidades.map(item => (
              <li key={item.id} style={{ marginBottom: '10px' }}>
                <strong>{item.titulo}</strong> na empresa {item.empresa}
                <button onClick={() => deletar('oportunidades', item.id)} style={{ marginLeft: '10px', color: 'red' }}>Excluir</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;