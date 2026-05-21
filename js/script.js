'use strict';

const SITE_THEME_KEY = 'organessonium.site.theme';
const SITE_LANGUAGE_KEY = 'organessonium.site.language';

const I18N = {
    'pt-BR': {
        documentTitle:'Organessônium | Site oficial',
        navLabel:'Seções do site',
        navFlow:'Funcionamento',
        navFeatures:'Recursos',
        navEditor:'Editor e prévias',
        languageButton:'Português',
        themeToggle:'Alternar tema',
        downloadLabel:'Downloads do Organessônium',
        downloadJar:'Download .jar',
        downloadExe:'Download .exe',
        downloadInstaller:'Instalador portátil',
        downloadSource:'Código fonte .zip',
        heroEyebrow:'Gerenciador de arquivos com Discord como armazenamento',
        heroLead:'O Organessônium transforma canais do Discord em uma biblioteca navegável: você envia arquivos, organiza tudo em pastas, pré-visualiza documentos e baixa os itens de volta quando precisar. A interface foi feita para parecer familiar, próxima de um explorador de arquivos moderno.',
        heroPrimary:'Entender o fluxo',
        heroSecondary:'Ver recursos',
        mockLabel:'Prévia simplificada da interface do Organessônium',
        mockPath:'Raiz / Estudos',
        mockSearch:'Pesquisar em Organessônium...',
        mockFolder:'Documentos',
        mockSelected:'2 selecionados',
        mockDownload:'Baixar',
        mockMove:'Mover',
        mockDelete:'Apagar',
        mockClear:'Limpar seleção',
        mockStatusLeft:'2 selecionados',
        mockStatusRight:'Arraste para mover ou solte arquivos para enviar',
        flowEyebrow:'Como funciona',
        flowTitle:'Um app local usando o Discord como cofre de arquivos',
        flowLead:'O Organessônium não é só uma tela bonita em cima de anexos. Ele mantém um índice, reconstrói arquivos divididos, carrega miniaturas e conversa com o bot para transformar threads em itens navegáveis.',
        flow1Title:'Conexão inicial',
        flow1Text:'Você configura o token do bot, o canal <code>names</code> para o índice e o fórum <code>apps</code> para os arquivos.',
        flow2Title:'Upload em threads',
        flow2Text:'Ao enviar um arquivo, o app cria uma publicação no fórum. Se passar de 10 MB, ele divide em partes e envia em sequência.',
        flow3Title:'Índice pesquisável',
        flow3Text:'O canal <code>names</code> guarda nome, tamanho, data, pasta, cor e ID da thread para o app listar tudo rapidamente.',
        flow4Title:'Download e remontagem',
        flow4Text:'Na volta, o app baixa os anexos com threads configuráveis, junta as partes e entrega o arquivo final no destino escolhido.',
        featuresEyebrow:'Recursos do app',
        featuresTitle:'O essencial de um explorador de arquivos, com extras próprios',
        featuresLead:'A experiência foi pensada para uso frequente: arrastar, selecionar, abrir prévias, editar Markdown, organizar pastas e acompanhar transferências sem precisar lidar diretamente com o Discord.',
        featureUploadTitle:'Arraste para enviar',
        featureUploadText:'Solte arquivos na janela ou use o botão de upload. Também dá para enviar pastas inteiras e manter a estrutura organizada.',
        featureSelectTitle:'Seleção como no Explorer',
        featureSelectText:'Clique, arraste o mouse e marque vários itens com um retângulo de seleção, parecido com o Windows Explorer.',
        featureMoveTitle:'Mover por arrasto',
        featureMoveText:'Depois de selecionar, arraste arquivos para pastas ou para a raiz. O app mostra um fantasma visual do item sendo movido.',
        featureTabsTitle:'Abas de navegação',
        featureTabsText:'O app usa abas para alternar entre arquivos e áreas abertas, como o editor Markdown, sem perder o ponto onde você estava.',
        featurePdfTitle:'Prévia de PDFs',
        featurePdfText:'PDFs são renderizados em páginas, com carregamento progressivo e camada de texto selecionável quando disponível.',
        featureDocTitle:'DOCX e documentos',
        featureDocText:'O preview extrai texto de DOCX, ODT, planilhas e apresentações compatíveis para leitura rápida dentro do app.',
        featureMarkdownTitle:'Editor Markdown integrado',
        featureMarkdownText:'Arquivos <code>.md</code> podem ser abertos em uma área própria, com modo visual, Markdown puro, toolbar e salvamento automático.',
        featureSearchTitle:'Busca e ordenação',
        featureSearchText:'Pesquise por nome e alterne a listagem por nome, tamanho ou data. A interface mantém modos de grade e lista.',
        featureLanguageTitle:'Português, inglês e ajustes finos',
        featureLanguageText:'A interface tem versões em português e inglês, tema claro/escuro, tamanho de cards, prévias, animações e desempenho configuráveis.',
        editorEyebrow:'Editor e prévias',
        editorTitle:'Abrir arquivos sem sair do Organessônium',
        editorLead:'As prévias evitam downloads desnecessários. Imagens, vídeos, textos, PDFs, documentos e compactados aparecem no próprio app; Markdown ganhou um fluxo especial para leitura, edição e salvamento.',
        editorSearch:'Pesquisar em Organessônium...',
        editorTabFiles:'Arquivos',
        editorTabMarkdown:'Editor Markdown',
        editorDocumentLabel:'Documento',
        editorSaved:'Salvo agora',
        editorTitleGroup:'Título',
        editorFormatGroup:'Formatar',
        editorBold:'Negrito',
        editorItalic:'Itálico',
        editorQuote:'Citação',
        editorCode:'Código',
        editorInsertGroup:'Inserir',
        editorList:'Lista',
        editorImage:'Imagem',
        editorViewGroup:'Visualizar',
        markdownSampleTitle:'Planejamento',
        markdownSampleLead:'<strong>Objetivo:</strong> organizar arquivos do projeto e manter notas junto dos anexos.',
        markdownSampleItem1:'Prévia rápida de PDF e DOCX',
        markdownSampleItem2:'Upload por arrastar e soltar',
        markdownSampleItem3:'Seleção múltipla com o mouse',
        markdownSampleBody:'Editor de Markdown no Organessônium, com abas, toolbar e salvamento automático.',
        previewPdfTitle:'PDFs paginados',
        previewPdfText:'O app renderiza páginas, mostra progresso e permite alternar entre arquivos pré-visualizáveis.',
        previewDocTitle:'Documentos Office',
        previewDocText:'DOCX, ODT, XLSX, PPTX e formatos próximos entram como leitura interna quando o conteúdo pode ser extraído.',
        previewArchiveTitle:'Compactados listáveis',
        previewArchiveText:'Arquivos ZIP e outros compactados compatíveis mostram uma lista de entradas antes do download completo.'
    },
    en: {
        documentTitle:'Organessônium | Official site',
        navLabel:'Site sections',
        navFlow:'How it works',
        navFeatures:'Features',
        navEditor:'Editor and previews',
        languageButton:'English',
        themeToggle:'Toggle theme',
        downloadLabel:'Organessônium downloads',
        downloadJar:'Download .jar',
        downloadExe:'Download .exe',
        downloadInstaller:'Portable installer',
        downloadSource:'Source code .zip',
        heroEyebrow:'File manager using Discord as storage',
        heroLead:'Organessônium turns Discord channels into a browsable library: you upload files, organize everything into folders, preview documents, and download items back whenever you need them. The interface is designed to feel familiar, close to a modern file explorer.',
        heroPrimary:'Understand the flow',
        heroSecondary:'See features',
        mockLabel:'Simplified preview of the Organessônium interface',
        mockPath:'Root / Studies',
        mockSearch:'Search in Organessônium...',
        mockFolder:'Documents',
        mockSelected:'2 selected',
        mockDownload:'Download',
        mockMove:'Move',
        mockDelete:'Delete',
        mockClear:'Clear selection',
        mockStatusLeft:'2 selected',
        mockStatusRight:'Drag to move or drop files to upload',
        flowEyebrow:'How it works',
        flowTitle:'A local app using Discord as a file vault',
        flowLead:'Organessônium is not just a nice layer over attachments. It keeps an index, rebuilds split files, loads thumbnails, and talks to the bot to turn threads into browsable items.',
        flow1Title:'Initial connection',
        flow1Text:'You configure the bot token, the <code>names</code> channel for the index, and the <code>apps</code> forum for files.',
        flow2Title:'Uploads in threads',
        flow2Text:'When you upload a file, the app creates a forum post. If it is larger than 10 MB, it splits the file into parts and sends them in order.',
        flow3Title:'Searchable index',
        flow3Text:'The <code>names</code> channel stores name, size, date, folder, color, and thread ID so the app can list everything quickly.',
        flow4Title:'Download and rebuild',
        flow4Text:'On download, the app fetches attachments with configurable threads, joins the parts, and delivers the final file to the chosen destination.',
        featuresEyebrow:'App features',
        featuresTitle:'The essentials of a file explorer, with its own extras',
        featuresLead:'The experience is designed for frequent use: drag, select, open previews, edit Markdown, organize folders, and track transfers without dealing directly with Discord.',
        featureUploadTitle:'Drag to upload',
        featureUploadText:'Drop files into the window or use the upload button. You can also upload whole folders while keeping the structure organized.',
        featureSelectTitle:'Explorer-like selection',
        featureSelectText:'Click, drag the mouse, and select multiple items with a selection rectangle, similar to Windows Explorer.',
        featureMoveTitle:'Move by dragging',
        featureMoveText:'After selecting items, drag files into folders or back to the root. The app shows a visual drag ghost for the item being moved.',
        featureTabsTitle:'Navigation tabs',
        featureTabsText:'The app uses tabs to switch between files and open areas, such as the Markdown editor, without losing where you were.',
        featurePdfTitle:'PDF previews',
        featurePdfText:'PDFs are rendered as pages, with progressive loading and selectable text layer when available.',
        featureDocTitle:'DOCX and documents',
        featureDocText:'The preview extracts text from DOCX, ODT, compatible spreadsheets, and presentations for quick reading inside the app.',
        featureMarkdownTitle:'Integrated Markdown editor',
        featureMarkdownText:'<code>.md</code> files can open in their own area, with visual mode, raw Markdown, a toolbar, and autosave.',
        featureSearchTitle:'Search and sorting',
        featureSearchText:'Search by name and sort the listing by name, size, or date. The interface keeps both grid and list modes.',
        featureLanguageTitle:'Portuguese, English, and fine tuning',
        featureLanguageText:'The interface has Portuguese and English versions, light/dark theme, card sizes, previews, animations, and configurable performance settings.',
        editorEyebrow:'Editor and previews',
        editorTitle:'Open files without leaving Organessônium',
        editorLead:'Previews avoid unnecessary downloads. Images, videos, text files, PDFs, documents, and archives appear inside the app; Markdown has a special flow for reading, editing, and saving.',
        editorSearch:'Search in Organessônium...',
        editorTabFiles:'Files',
        editorTabMarkdown:'Markdown editor',
        editorDocumentLabel:'Document',
        editorSaved:'Saved now',
        editorTitleGroup:'Title',
        editorFormatGroup:'Format',
        editorBold:'Bold',
        editorItalic:'Italic',
        editorQuote:'Quote',
        editorCode:'Code',
        editorInsertGroup:'Insert',
        editorList:'List',
        editorImage:'Image',
        editorViewGroup:'Preview',
        markdownSampleTitle:'Planning',
        markdownSampleLead:'<strong>Goal:</strong> organize project files and keep notes next to attachments.',
        markdownSampleItem1:'Fast PDF and DOCX preview',
        markdownSampleItem2:'Drag-and-drop upload',
        markdownSampleItem3:'Multiple selection with the mouse',
        markdownSampleBody:'Markdown editing in Organessônium, with tabs, a toolbar, and autosave.',
        previewPdfTitle:'Paginated PDFs',
        previewPdfText:'The app renders pages, shows progress, and lets you move between previewable files.',
        previewDocTitle:'Office documents',
        previewDocText:'DOCX, ODT, XLSX, PPTX, and related formats open as internal reading views when their content can be extracted.',
        previewArchiveTitle:'Browsable archives',
        previewArchiveText:'ZIP files and other compatible archives show their entries before a full download.'
    }
};

function iconMarkup(name, size) {
    if (typeof icon === 'function') return icon(name, size);
    return '';
}

function applySiteTheme(theme) {
    const safeTheme = theme === 'light' ? 'light' : 'dark';
    document.documentElement.dataset.theme = safeTheme;

    const button = document.getElementById('theme-toggle');
    if (!button) return;
    button.setAttribute('aria-pressed', safeTheme === 'light' ? 'true' : 'false');
    button.innerHTML = iconMarkup(safeTheme === 'light' ? 'light_mode' : 'dark_mode', 17);
}

function translatePage(language) {
    const lang = language === 'en' ? 'en' : 'pt-BR';
    const dict = I18N[lang];

    document.documentElement.lang = lang;
    document.title = dict.documentTitle;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (dict[key] != null) el.textContent = dict[key];
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.dataset.i18nHtml;
        if (dict[key] != null) el.innerHTML = dict[key];
    });
    document.querySelectorAll('[data-i18n-attr]').forEach(el => {
        el.dataset.i18nAttr.split(',').forEach(pair => {
            const [attr, key] = pair.split(':').map(part => part.trim());
            if (attr && key && dict[key] != null) el.setAttribute(attr, dict[key]);
        });
    });

    const languageButton = document.getElementById('language-toggle');
    if (languageButton) {
        languageButton.setAttribute('aria-pressed', lang === 'en' ? 'true' : 'false');
        languageButton.setAttribute('aria-label', lang === 'en' ? 'Switch to Portuguese' : 'Alternar para inglês');
        languageButton.title = languageButton.getAttribute('aria-label');
    }

    const themeButton = document.getElementById('theme-toggle');
    if (themeButton) {
        themeButton.setAttribute('aria-label', dict.themeToggle);
        themeButton.title = dict.themeToggle;
    }
}

function initSite() {
    if (typeof initIcons === 'function') initIcons();

    let savedTheme = 'dark';
    let savedLanguage = 'pt-BR';
    try {
        savedTheme = localStorage.getItem(SITE_THEME_KEY) || 'dark';
        savedLanguage = localStorage.getItem(SITE_LANGUAGE_KEY) || 'pt-BR';
    } catch (_) {}

    applySiteTheme(savedTheme);
    translatePage(savedLanguage);

    const themeButton = document.getElementById('theme-toggle');
    if (themeButton) {
        themeButton.addEventListener('click', () => {
            const nextTheme = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
            applySiteTheme(nextTheme);
            try { localStorage.setItem(SITE_THEME_KEY, nextTheme); } catch (_) {}
        });
    }

    const languageButton = document.getElementById('language-toggle');
    if (languageButton) {
        languageButton.addEventListener('click', () => {
            const nextLanguage = document.documentElement.lang === 'en' ? 'pt-BR' : 'en';
            translatePage(nextLanguage);
            try { localStorage.setItem(SITE_LANGUAGE_KEY, nextLanguage); } catch (_) {}
        });
    }
}

document.addEventListener('DOMContentLoaded', initSite);
