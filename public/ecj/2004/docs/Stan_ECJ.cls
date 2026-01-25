%% Stan_ECJ.cls 2004/05/16 version V0.1
%%
%% This is the LaTeX class for authors of papers published in the 
%% Stanford ECJ.  It is derived from, and requires, the IEEEtran class.
%% It also requires the cite package.
%% 
%% The latest version of and documentation for these packages is at:
%%     http://www.ctan.org/tex-archive/macros/latex/contrib/IEEEtran/
%%     http://www.ctan.org/tex-archive/macros/latex/contrib/cite/
%%
%% 
%% Author:
%% Michael Bax <mbax@stanford.edu> (2004)
%%
%% 
%%**********************************************************************
%%
%% Legal Notice:
%% Copyright 2004 by Michael Bax and Stanford University.  All rights reserved.
%%
%% Redistribution and use in source and binary forms, with or without
%% modification, are permitted provided that the following conditions are met:
%%
%% 1. Redistributions of source code must retain the above copyright notice,
%%    this list of conditions and the following disclaimer.
%% 2. Redistributions in binary form must reproduce the above copyright notice,
%%    this list of conditions and the following disclaimer in the documentation
%%    and/or other materials provided with the distribution.
%%
%% THIS CODE IS PROVIDED ``AS IS'' AND ANY EXPRESS OR IMPLIED WARRANTIES,
%% INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
%% FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL STANFORD
%% UNIVERSITY, THE AUTHORS, OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
%% INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
%% LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA,
%% OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
%% LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
%% NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS CODE,
%% EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
%%
%% The views and conclusions contained in the code and documentation are those
%% of the authors and should not be interpreted as representing official
%% policies, either expressed or implied, of Stanford University.
%%
%% 
%% Any changes should also be documented via source comments.
%%**********************************************************************

\NeedsTeXFormat{LaTeX2e}
\ProvidesClass{Stan_ECJ}[2004/05/16 Stanford ECJ LaTeX2e class v0.1 by Michael Bax]

\LoadClassWithOptions{IEEEtran}
\RequirePackage{cite}
\RequirePackage{color}

% Cardinal red for coloured text
\definecolor{cardinal}{rgb}{0.737,0.193,0.033}

% Left margin
\oddsidemargin -0.5in
\evensidemargin -0.5in

% Implicit 0.5in right margin
\textwidth 7.5in

% No page headings or numbers
\def\@oddhead{}
\def\@evenhead{}
\def\ps@titlepagestyle{}
     
% Title, authors names, affiliations and special paper notice
% THIS IS A CONTROLLED SPACING COMMAND! Do not allow blank lines or
% unintentional spaces to enter the definition - use % at the end of each line.
\def\@maketitle{\newpage\begin{center}%
\vskip1em{\huge\sffamily\@title\par}\vskip0.5em\par%
{\lineskip0em\Large\sffamily{}\color{cardinal}\@author\@specialpapernotice\par}%
\end{center}}

% Abstract format
\def\abstract{\vspace{-5.5ex}\begin{center}\begin{minipage}{6.25in}%
\normalsize\textbf{\textsf{\color{cardinal}Abstract.}} \@IEEEgobbleleadPARNLSP}
\def\endabstract{\end{minipage}\end{center}\relax\vspace{2.0ex}\par}

% Index terms format
\def\keywords{\vspace{-1.5ex}\begin{center}\begin{minipage}{6.25in}%
\normalsize\textbf{\textsf{\color{cardinal}Index Terms:}} \@IEEEgobbleleadPARNLSP}
\def\endkeywords{\end{minipage}\end{center}\relax\vspace{2.0ex}\par}

% Section header definition
\def\section{\@startsection{section}{1}{\z@}{3.0ex plus 1.5ex minus 1.5ex}%
{0.7ex plus 1ex minus 0ex}{\normalfont\large\centering\bfseries\sffamily\color{cardinal}}}%
\def\subsection{\@startsection{subsection}{2}{\z@}{3.5ex plus 1.5ex minus 1.5ex}%
{0.7ex plus .5ex minus 0ex}{\normalfont\normalsize\bfseries\sffamily\color{cardinal}}}%

% Center single-line figure captions
\centerfigcaptionstrue

\endinput

%%%%%%%%%%%%%%%%%%%%%%%%%%%%% End of StanfordECJ.cls  %%%%%%%%%%%%%%%%%%%%%%%%%%%%