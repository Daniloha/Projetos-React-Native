/*
 * Funções de CRUD para o Firebase
 *  fireBaseCRUD.tsx
 */

import { Timestamp, doc, setDoc, getDoc, updateDoc, increment, collection, addDoc, DocumentReference, DocumentSnapshot } from "firebase/firestore"; 
import { db } from '../Controllers/firebaseConfig'
import { Usuario, TipoDeConta } from './Iusuarios'
import { IVaga } from './IVagas'

// Função para obter e atualizar o próximo ID disponível
async function getAndUpdateNextID() {
  const metadataDocRef = doc(db, "MetaDados", "ID_MetaDados");
  const metadataDoc = await getDoc(metadataDocRef);

  if (metadataDoc.exists()) {
    const currentID = metadataDoc.data()?.proxID || 0;

    // Atualiza o próximo ID disponível no Firestore
    await updateDoc(metadataDocRef, {
      proxID: increment(currentID),
    });

    return currentID;
  } else {
    // Se o documento de metadados não existir, cria um novo
    await setDoc(metadataDocRef, { proxID: 1 });

    return 0;
  }
}

// Adiciona nova conta ao Banco de dados
export async function addConta(usuario: Usuario) {

  const proxID = await getAndUpdateNextID();
  
  try {
    let contaData;
    if(usuario.tipoConta == TipoDeConta.COMUM){
      contaData = {
        ID_Conta: proxID.toString().padStart(4, '0'), 
        Timestamp: Timestamp.fromDate(new Date()),
        cpf_Usuario: usuario.cpf,
        email: usuario.email,
        nome_Usuario: usuario.nome,
        senha: usuario.senha,
        tipo_Conta: usuario.tipoConta
      };
    } else {
      contaData = {
        ID_Conta: proxID.toString().padStart(4, '0'),
        Timestamp: Timestamp.fromDate(new Date()),
        cpf_Usuario: usuario.cpf,
        curso_Estudante: usuario.curso,
        email: usuario.email,
        matricula_Estudante: usuario.matricula,
        nome_Usuario: usuario.nome,
        semestre_Estudante: usuario.semestre,
        senha: usuario.senha,
        tipo_Conta: usuario.tipoConta,
      };
    }

    await setDoc(doc(db, "CONTA", `${usuario.tipoConta}_${proxID.toString()}`), contaData);
    console.log("Conta adicionada com sucesso!");
  } catch (error) {
    console.error("Erro ao adicionar conta:", error);
    console.log("Conta não adicionada!");
  }
}


// Adiciona nova vaga ao Banco de dados
export async function addVaga(vaga: IVaga) {

  const proxID = await getAndUpdateNextID();

  try {
    await setDoc(doc(db, "VAGA", proxID.toString()), {
      ID_Vaga: proxID,
      Timestamp: Timestamp.fromDate(new Date()),
      cursoVaga: vaga.cursoVaga,
      descricaoVaga: vaga.descricaoVaga,
      quantidadeVaga: vaga.quantidadeVaga,
      semestreVaga: vaga.semestreVaga,
      statusVaga: vaga.statusVaga,
      tipoVaga: vaga.tipoVaga,
      tituloVaga: vaga.tituloVaga
    });
    console.log("Vaga adicionada com sucesso!");
    
  }catch (error) {
    console.error("Erro ao adicionar vaga:", error);
    console.log("Vaga não adicionada!");
  } 
}
// Adiciona uma vaga candidatada para um usuário
export async function candidatarVaga( usuarioId: string, vagaId: string) {
  try {
    // Obtém a referência para a vaga desejada na coleção "vagasDisponiveis"
    const vagaRef = doc(db, "VAGA", vagaId);
    const vagaSnapshot = await getDoc(vagaRef);

    // Verifica se a vaga existe e está disponível
    if (vagaSnapshot.exists() && vagaSnapshot.data()?.statusVaga === 'DISPONÍVEL') {
      // Obtém os dados da vaga
      const vagaData = vagaSnapshot.data() as IVaga;
      const usuarioData = vagaSnapshot.data() as Usuario;

      // Verifica se a vaga possui o mesmo semestre e curso do usuário
      if (vagaData.semestreVaga === usuarioData.semestre && vagaData.cursoVaga === usuarioData.curso) {
        // Cria uma referência para a subcoleção "vagasCandidatadas" do usuário
        const userRef = doc(db, "usuarios", usuarioId);
        const vagasCandidatadasRef = collection(userRef, "vagasCandidatadas");

        // Adiciona a vaga candidatada
        await addDoc(vagasCandidatadasRef, {
          titulo: vagaData.tipoVaga,
          descricao: vagaData.descricaoVaga,
          // outros campos da vaga
        });

        console.log("Vaga candidatada com sucesso!");
      } else {
        console.log("Você só pode se candidatar a vagas do seu semestre e curso.");
      }
    } else {
      console.log("Vaga não encontrada ou não está disponível para candidatura.");
    }
  } catch (error) {
    console.error("Erro ao candidatar vaga:", error);
  }
}