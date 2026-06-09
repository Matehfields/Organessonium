'use strict';

const I18N = {
    'pt-BR': {
        documentTitle:'Organessônium | Site oficial',
        navLabel:'Seções do site',
        navFlow:'Funcionamento',
        navFeatures:'Recursos',
        navMobile:'Mobile',
        navEditor:'Editor e prévias',
        navReleases:'Releases',
        languageButton:'Português',
        themeToggle:'Alternar tema',
        downloadLabel:'Downloads do Organessônium',
        downloadJar:'Download .jar',
        downloadExe:'.exe portátil',
        downloadInstaller:'Instalador',
        downloadApk:'Download .apk',
        downloadSource:'Código fonte .zip',
        releaseMoreLink:'Código fonte e outros releases',
        heroEyebrow:'Gerenciador de arquivos com Discord como armazenamento',
        heroLead:'O Organessônium transforma canais do Discord em uma biblioteca navegável: você envia arquivos, organiza tudo em pastas, pré-visualiza arquivos e baixa os itens de volta quando precisar. A interface foi feita para parecer familiar, próxima de um explorador de arquivos moderno.',
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
        featureMobileTitle:'Versão mobile Flutter',
        featureMobileText:'A versão Android fica no projeto organessonium-flutter, com interface pensada para toque e distribuição por APK.',
        featureMarkdownTitle:'Editor Markdown integrado',
        featureMarkdownText:'Arquivos <code>.md</code> podem ser abertos em uma área própria, com modo visual, Markdown puro, toolbar e salvamento automático.',
        featureSearchTitle:'Busca e ordenação',
        featureSearchText:'Pesquise por nome e alterne a listagem por nome, tamanho ou data. A interface mantém modos de grade e lista.',
        featureLanguageTitle:'Português, inglês e ajustes finos',
        featureLanguageText:'A interface tem versões em português e inglês, tema claro/escuro, tamanho de cards, prévias, animações e desempenho configuráveis.',
        featureCacheTitle:'Cache local no PC',
        featureCacheText:'A versão desktop usa SQLite local para guardar configurações e dados auxiliares sem depender da rede para tudo.',
        featureImagePreviewTitle:'Prévia de imagens',
        featureImagePreviewText:'Imagens podem ser abertas no app com visualização rápida, útil para conferir arquivos antes de baixar ou mover.',
        featureEcosystemTitle:'Ecossistema multiplataforma',
        featureEcosystemText:'Desktop e Android seguem a mesma biblioteca de arquivos, com versões separadas para cada ambiente.',
        mobileEyebrow:'Versão mobile',
        mobileTitle:'Interface Android feita em Flutter',
        mobileLead:'A versão mobile fica em organessonium-flutter e faz parte do mesmo ecossistema do desktop: buscar, abrir arquivos, enviar itens, acompanhar transferências e navegar pela biblioteca com interface própria para toque.',
        mobileMockLabel:'Prévia da interface mobile do Organessônium',
        mobileSearch:'Pesquisar no Organessônium',
        mobileControlsLabel:'Modos de visualização',
        mobileViewGrid:'Grade',
        mobileViewList:'Lista',
        mobileSort:'Ordenar',
        mobileNavFiles:'Arquivos',
        mobileNavRecent:'Recentes',
        mobileNavTransfers:'Transferências',
        mobileNoteSearchTitle:'Busca na mão',
        mobileNoteSearchText:'A tela inicial usa uma barra grande de pesquisa, menu lateral e logo no canto, como no app Flutter.',
        mobileNoteUploadTitle:'Upload por toque',
        mobileNoteUploadText:'O botão flutuante abre as ações de enviar arquivo ou criar pasta, sem depender de arrastar e soltar.',
        mobileNoteNavTitle:'Navegação inferior',
        mobileNoteNavText:'Arquivos, recentes e transferências ficam fixos na parte de baixo, seguindo o fluxo do aplicativo Android.',
        editorEyebrow:'Editor e prévias',
        editorTitle:'Abrir arquivos sem sair do Organessônium',
        editorLead:'As prévias evitam downloads desnecessários. Imagens, vídeos, textos, PDFs e compactados aparecem no próprio app; Markdown ganhou um fluxo especial para leitura, edição e salvamento.',
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
        markdownSampleItem1:'Prévia rápida de PDF',
        markdownSampleItem2:'Upload por arrastar e soltar',
        markdownSampleItem3:'Seleção múltipla com o mouse',
        markdownSampleBody:'Editor de Markdown no Organessônium, com abas, toolbar e salvamento automático.',
        previewPdfTitle:'PDFs paginados',
        previewPdfText:'O app renderiza páginas, mostra progresso e permite alternar entre arquivos pré-visualizáveis.',
        previewTextTitle:'Textos e Markdown',
        previewTextText:'Arquivos de texto e .md continuam abrindo no app para leitura rápida, edição e salvamento quando fizer sentido.',
        previewArchiveTitle:'Compactados listáveis',
        previewArchiveText:'Arquivos ZIP e outros compactados compatíveis mostram uma lista de entradas antes do download completo.',
        releasesDocumentTitle:'Organessônium | Releases',
        releasesEyebrow:'Arquivos de release',
        releasesTitle:'Downloads e código fonte',
        releasesLead:'Baixe a variante certa do Organessônium. Java é a base original, Windows é a versão desktop atual e Flutter é a versão Android.',
        backToHome:'Voltar ao site',
        seePackages:'Ver pacotes',
        releaseSummaryTitle:'3 pacotes',
        releaseSummaryText:'Java, Windows e Android. Cada variante tem binário e código fonte separados quando disponível.',
        releaseGridEyebrow:'Pacotes disponíveis',
        releaseGridTitle:'Escolha a versão',
        releaseGridLead:'Use o pacote pronto para testar ou instalar. O código fonte fica separado para quem quer compilar ou modificar.',
        releaseJavaTag:'Java',
        releaseJavaTitle:'Desktop Java',
        releaseJavaText:'JAR da versão original. Requer Java instalado.',
        releaseJavaDownloads:'Downloads Java',
        releaseCsharpTag:'Windows',
        releaseCsharpTitle:'Desktop Windows',
        releaseCsharpText:'Executável para Windows com WebView2. Pode rodar portátil ou via instalador.',
        releaseCsharpDownloads:'Downloads C# e WebView2',
        releaseFlutterTag:'Android',
        releaseFlutterTitle:'Mobile Flutter',
        releaseFlutterText:'APK Android gerado a partir do projeto organessonium-flutter.',
        releaseFlutterDownloads:'Downloads Flutter'
    },
    en: {
        documentTitle:'Organessônium | Official site',
        navLabel:'Site sections',
        navFlow:'How it works',
        navFeatures:'Features',
        navMobile:'Mobile',
        navEditor:'Editor and previews',
        navReleases:'Releases',
        languageButton:'English',
        themeToggle:'Toggle theme',
        downloadLabel:'Organessônium downloads',
        downloadJar:'Download .jar',
        downloadExe:'Portable .exe',
        downloadInstaller:'Installer',
        downloadApk:'Download .apk',
        downloadSource:'Source code .zip',
        releaseMoreLink:'Source code and other releases',
        heroEyebrow:'File manager using Discord as storage',
        heroLead:'Organessônium turns Discord channels into a browsable library: you upload files, organize everything into folders, preview files, and download items back whenever you need them. The interface is designed to feel familiar, close to a modern file explorer.',
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
        featureMobileTitle:'Flutter mobile version',
        featureMobileText:'The Android version lives in the organessonium-flutter project, with a touch-first interface and APK distribution.',
        featureMarkdownTitle:'Integrated Markdown editor',
        featureMarkdownText:'<code>.md</code> files can open in their own area, with visual mode, raw Markdown, a toolbar, and autosave.',
        featureSearchTitle:'Search and sorting',
        featureSearchText:'Search by name and sort the listing by name, size, or date. The interface keeps both grid and list modes.',
        featureLanguageTitle:'Portuguese, English, and fine tuning',
        featureLanguageText:'The interface has Portuguese and English versions, light/dark theme, card sizes, previews, animations, and configurable performance settings.',
        featureCacheTitle:'Local cache on PC',
        featureCacheText:'The desktop version uses local SQLite storage for settings and helper data, so not everything depends on the network.',
        featureImagePreviewTitle:'Image previews',
        featureImagePreviewText:'Images can open inside the app with quick preview, useful before downloading or moving files.',
        featureEcosystemTitle:'Multiplatform ecosystem',
        featureEcosystemText:'Desktop and Android follow the same file-library idea, with separate builds for each environment.',
        mobileEyebrow:'Mobile version',
        mobileTitle:'Android interface built in Flutter',
        mobileLead:'The mobile version lives in organessonium-flutter and is part of the same desktop ecosystem: search, open files, upload items, track transfers, and browse the library with a touch-first interface.',
        mobileMockLabel:'Preview of the Organessônium mobile interface',
        mobileSearch:'Search Organessônium',
        mobileControlsLabel:'View modes',
        mobileViewGrid:'Grid',
        mobileViewList:'List',
        mobileSort:'Sort',
        mobileNavFiles:'Files',
        mobileNavRecent:'Recent',
        mobileNavTransfers:'Transfers',
        mobileNoteSearchTitle:'Search at hand',
        mobileNoteSearchText:'The home screen uses a large search bar, side menu, and logo in the corner, matching the Flutter app.',
        mobileNoteUploadTitle:'Touch upload',
        mobileNoteUploadText:'The floating button opens actions to upload a file or create a folder, without relying on drag and drop.',
        mobileNoteNavTitle:'Bottom navigation',
        mobileNoteNavText:'Files, recent items, and transfers stay fixed at the bottom, following the Android app flow.',
        editorEyebrow:'Editor and previews',
        editorTitle:'Open files without leaving Organessônium',
        editorLead:'Previews avoid unnecessary downloads. Images, videos, text files, PDFs, and archives appear inside the app; Markdown has a special flow for reading, editing, and saving.',
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
        markdownSampleItem1:'Fast PDF preview',
        markdownSampleItem2:'Drag-and-drop upload',
        markdownSampleItem3:'Multiple selection with the mouse',
        markdownSampleBody:'Markdown editing in Organessônium, with tabs, a toolbar, and autosave.',
        previewPdfTitle:'Paginated PDFs',
        previewPdfText:'The app renders pages, shows progress, and lets you move between previewable files.',
        previewTextTitle:'Text and Markdown files',
        previewTextText:'Text files and .md notes still open inside the app for quick reading, editing, and saving when it makes sense.',
        previewArchiveTitle:'Browsable archives',
        previewArchiveText:'ZIP files and other compatible archives show their entries before a full download.',
        releasesDocumentTitle:'Organessônium | Releases',
        releasesEyebrow:'Release files',
        releasesTitle:'Downloads and source code',
        releasesLead:'Download the right Organessônium variant. Java is the original base, Windows is the current desktop build, and Flutter is the Android version.',
        backToHome:'Back to site',
        seePackages:'See packages',
        releaseSummaryTitle:'3 packages',
        releaseSummaryText:'Java, Windows, and Android. Each variant has separate binaries and source code when available.',
        releaseGridEyebrow:'Available packages',
        releaseGridTitle:'Choose a version',
        releaseGridLead:'Use a ready package to test or install. Source code is separate for compiling or modifying.',
        releaseJavaTag:'Java',
        releaseJavaTitle:'Java desktop',
        releaseJavaText:'JAR for the original version. Requires Java installed.',
        releaseJavaDownloads:'Java downloads',
        releaseCsharpTag:'Windows',
        releaseCsharpTitle:'Windows desktop',
        releaseCsharpText:'Windows executable with WebView2. Runs as portable or through the installer.',
        releaseCsharpDownloads:'C# and WebView2 downloads',
        releaseFlutterTag:'Android',
        releaseFlutterTitle:'Flutter mobile',
        releaseFlutterText:'Android APK generated from the organessonium-flutter project.',
        releaseFlutterDownloads:'Flutter downloads'
    }
};

function iconMarkup(name, size) {
    if (typeof icon === 'function') return icon(name, size);
    return '';
}

function systemTheme() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

function systemLanguage() {
    const languages = Array.isArray(navigator.languages) && navigator.languages.length
        ? navigator.languages
        : [navigator.language || 'pt-BR'];
    if (languages.some(language => String(language || '').toLowerCase().startsWith('pt'))) {
        return 'pt-BR';
    }
    for (const language of languages) {
        const normalized = String(language || '').toLowerCase();
        if (normalized.startsWith('en')) return 'en';
    }
    return 'pt-BR';
}

function syncInputMode() {
    const isTouch = (navigator.maxTouchPoints || 0) > 0
        || (window.matchMedia && window.matchMedia('(pointer: coarse)').matches);
    document.documentElement.classList.toggle('site-touch-device', Boolean(isTouch));
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
    const page = document.body && document.body.dataset.page;

    document.documentElement.lang = lang;
    document.title = page === 'releases' ? dict.releasesDocumentTitle : dict.documentTitle;

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

    syncInputMode();
    applySiteTheme(systemTheme());
    translatePage(systemLanguage());

    const themeButton = document.getElementById('theme-toggle');
    if (themeButton) {
        themeButton.addEventListener('click', () => {
            const nextTheme = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
            applySiteTheme(nextTheme);
        });
    }

    const languageButton = document.getElementById('language-toggle');
    if (languageButton) {
        languageButton.addEventListener('click', () => {
            const nextLanguage = document.documentElement.lang === 'en' ? 'pt-BR' : 'en';
            translatePage(nextLanguage);
        });
    }

    if (window.matchMedia) {
        const themeQuery = window.matchMedia('(prefers-color-scheme: light)');
        if (typeof themeQuery.addEventListener === 'function') {
            themeQuery.addEventListener('change', () => applySiteTheme(systemTheme()));
        } else if (typeof themeQuery.addListener === 'function') {
            themeQuery.addListener(() => applySiteTheme(systemTheme()));
        }

        const touchQuery = window.matchMedia('(pointer: coarse)');
        if (typeof touchQuery.addEventListener === 'function') {
            touchQuery.addEventListener('change', syncInputMode);
        } else if (typeof touchQuery.addListener === 'function') {
            touchQuery.addListener(syncInputMode);
        }
    }

    window.addEventListener('languagechange', () => translatePage(systemLanguage()));
}

document.addEventListener('DOMContentLoaded', initSite);
