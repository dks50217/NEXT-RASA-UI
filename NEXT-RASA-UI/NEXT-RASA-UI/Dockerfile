FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["NEXT-RASA-UI/NEXT-RASA-UI.csproj", "NEXT-RASA-UI/"]
RUN dotnet restore "NEXT-RASA-UI/NEXT-RASA-UI.csproj"
COPY . .
WORKDIR "/src/NEXT-RASA-UI"
RUN dotnet build "NEXT-RASA-UI.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "NEXT-RASA-UI.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "NEXT-RASA-UI.dll"]